import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { SlideInterface } from '../../classes/SlideInterface';

@Component({
  selector: 'image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.css'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  //@Input() slides: SlideInterface[] = [];

  slides: SlideInterface[] = [
    { url: '/assets/image-1.jpeg', title: 'beach' },
    { url: '/assets/image-2.jpeg', title: 'boat' },
    { url: '/assets/image-3.jpeg', title: 'forest' },
    { url: '/assets/image-4.jpeg', title: 'city' },
    { url: '/assets/image-5.jpeg', title: 'italy' },
  ];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}
