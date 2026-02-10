import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  imports: [],
  templateUrl: './count-down-timer.html',
  styleUrl: './count-down-timer.css',
})
export class CountDownTimer implements OnInit, OnDestroy {
  time = signal({ h: 2, m: 14, s: 59 });
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time.update((prev) => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  format(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
