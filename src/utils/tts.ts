// Web Speech API Narrator Manager with Indonesian voice support and tracking
class TTSNarrator {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private isMuted: boolean = false;
  private speechRate: number = 1.0; // 0.8 to 1.3
  private onStatusChangeListeners: ((status: TTSStatus) => void)[] = [];
  private onSegmentListeners: ((segmentIndex: number) => void)[] = [];
  private speechQueue: string[] = [];
  private activeQueueIndex: number = -1;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    // Prioritize Indonesian voices: id-ID
    const indonesianVoice = this.voices.find(
      (v) => v.lang === 'id-ID' || v.lang.startsWith('id') || v.name.toLowerCase().includes('indonesia')
    );
    if (indonesianVoice) {
      this.selectedVoice = indonesianVoice;
    } else if (this.voices.length > 0) {
      // Fallback: pick any natural or default voice
      this.selectedVoice = this.voices.find((v) => v.default) || this.voices[0];
    }
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  public getIndonesianVoice(): SpeechSynthesisVoice | null {
    return this.selectedVoice;
  }

  public setVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice;
  }

  public setRate(rate: number) {
    this.speechRate = Math.max(0.7, Math.min(1.4, rate));
  }

  public getRate(): number {
    return this.speechRate;
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stop();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public isSupported(): boolean {
    return !!this.synth;
  }

  public subscribeStatus(listener: (status: TTSStatus) => void): () => void {
    this.onStatusChangeListeners.push(listener);
    return () => {
      this.onStatusChangeListeners = this.onStatusChangeListeners.filter((l) => l !== listener);
    };
  }

  public subscribeSegment(listener: (segmentIndex: number) => void): () => void {
    this.onSegmentListeners.push(listener);
    return () => {
      this.onSegmentListeners = this.onSegmentListeners.filter((l) => l !== listener);
    };
  }

  private emitStatus(state: TTSState, textSnippet?: string) {
    const status: TTSStatus = {
      state,
      textSnippet,
      currentSegment: this.activeQueueIndex,
      isMuted: this.isMuted,
      speechRate: this.speechRate,
    };
    for (const listener of this.onStatusChangeListeners) {
      listener(status);
    }
  }

  private emitSegment(index: number) {
    for (const listener of this.onSegmentListeners) {
      listener(index);
    }
  }

  /**
   * Speak a list of paragraphs / sentences sequentially with visual segment tracking
   */
  public speakSegments(segments: string[]) {
    this.stop();
    if (this.isMuted || !this.synth) return;

    this.speechQueue = segments.filter((s) => s.trim().length > 0);
    this.activeQueueIndex = -1;
    this.playNextSegment();
  }

  /**
   * Speak a single text block
   */
  public speakText(text: string) {
    this.speakSegments([text]);
  }

  private playNextSegment() {
    if (!this.synth || this.isMuted) return;

    this.activeQueueIndex += 1;
    if (this.activeQueueIndex >= this.speechQueue.length) {
      this.emitStatus('idle');
      return;
    }

    const rawText = this.speechQueue[this.activeQueueIndex];
    // Clean spoken text: format math notations to articulate Indonesian phrases
    const spokenText = this.sanitizeSpokenMath(rawText);

    try {
      this.currentUtterance = new SpeechSynthesisUtterance(spokenText);
      if (this.selectedVoice) {
        this.currentUtterance.voice = this.selectedVoice;
      }
      this.currentUtterance.lang = 'id-ID';
      this.currentUtterance.rate = this.speechRate;
      this.currentUtterance.pitch = 1.0;

      this.currentUtterance.onstart = () => {
        this.emitStatus('speaking', rawText);
        this.emitSegment(this.activeQueueIndex);
      };

      this.currentUtterance.onend = () => {
        this.playNextSegment();
      };

      this.currentUtterance.onerror = (e) => {
        console.warn('Speech synthesis error or cancelled:', e);
        this.emitStatus('idle');
      };

      this.synth.speak(this.currentUtterance);
    } catch (err) {
      console.error('TTS execution failed:', err);
      this.emitStatus('idle');
    }
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.emitStatus('paused');
    }
  }

  public resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.emitStatus('speaking');
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      this.speechQueue = [];
      this.activeQueueIndex = -1;
      this.emitStatus('idle');
      this.emitSegment(-1);
    }
  }

  /**
   * Converts physics math symbols into natural spoken Indonesian
   */
  public sanitizeSpokenMath(text: string): string {
    return text
      .replace(/1\/f\s*=\s*1\/s\s*\+\s*1\/s'/g, 'satu per f sama dengan satu per s ditambah satu per s aksen')
      .replace(/1\/f/g, 'satu per f')
      .replace(/1\/s'/g, 'satu per s aksen')
      .replace(/1\/s/g, 'satu per s')
      .replace(/s'/g, 's aksen')
      .replace(/f_ob|fob/g, 'f objektif')
      .replace(/f_ok|fok/g, 'f okuler')
      .replace(/s_ob|sob/g, 's objektif')
      .replace(/s_ok|sok/g, 's okuler')
      .replace(/M_tot|M_total/g, 'perbesaran total M')
      .replace(/(\d+)\s*cm/gi, '$1 sentimeter')
      .replace(/(\d+)\s*mm/gi, '$1 milimeter')
      .replace(/(\d+)\s*m\b/gi, '$1 meter')
      .replace(/([+-]?\d+(?:\.\d+)?)\s*D\b/g, '$1 Dioptri')
      .replace(/\bPP\b/g, 'titik dekat P P')
      .replace(/\bPR\b/g, 'titik jauh P R')
      .replace(/\bSn\b/g, 'titik dekat normal S n')
      .replace(/×/g, ' kali ')
      .replace(/÷/g, ' bagi ')
      .replace(/=/g, ' sama dengan ')
      .replace(/\+/g, ' ditambah ')
      .replace(/-/g, ' dikurang ')
      .replace(/\*/g, ' dikali ')
      .replace(/~/g, 'tak hingga');
  }
}

export type TTSState = 'idle' | 'speaking' | 'paused';

export interface TTSStatus {
  state: TTSState;
  textSnippet?: string;
  currentSegment: number;
  isMuted: boolean;
  speechRate: number;
}

export const narrator = new TTSNarrator();
