import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {TimeRangeType} from "../types/time-range.type";
import {BgColorType} from "../types/bg-color.type";

@Directive({
  selector: '[isAutoBgColor]'
})
export class IsAutoBgColorDirective implements OnInit {

  readonly timeRanges: TimeRangeType[];
  readonly bgColors: BgColorType[];

  @Input() autoBgColor: string = '';

  constructor() {
    this.timeRanges = [
      {name: 'Утро', start: '06:00', end: '11:59'},
      {name: 'День', start: '12:00', end: '17:59'},
      {name: 'Вечер', start: '18:00', end: '23:59'},
      {name: 'Ночь', start: '00:00', end: '05:59'}
    ];
    this.bgColors = [
      {name: 'Утро', bgColor: '#EEF05E'},
      {name: 'День', bgColor: '#419cf8'},
      {name: 'Вечер', bgColor: '#f6af20'},
      {name: 'Ночь', bgColor: '#032090'}
    ]
  }

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  // Функция для преобразования времени в минуты
  private timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Функция для получения текущего временного диапазона
  private getCurrentTimeRange(currentTime: string): undefined | TimeRangeType {
    const currentMinutes = this.timeToMinutes(currentTime);

    for (const range of this.timeRanges) {
      const startMinutes = this.timeToMinutes(range.start);
      const endMinutes = this.timeToMinutes(range.end);

      // Особый случай для ночи (переход через полночь)
      if (range.name === 'Ночь') {
        if (currentMinutes >= startMinutes || currentMinutes <= endMinutes) {
          return range;
        }
      }
      // Для всех остальных диапазонов
      else if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
        return range;
      }
    }
    return undefined;
  }


  getCurrentTimeLocal(): string {
    return new Date().toLocaleTimeString('ru-RU', {})
  }

  ngOnInit(): void {
    const time = this.getCurrentTimeLocal();
    // console.log(time);
    const namePartOfDay = this.getCurrentTimeRange(time);
    // console.log(namePartOfDay?.name);
    if (namePartOfDay) {
      this.changeBgColor(namePartOfDay.name);
    }
  }

  changeBgColor(namePartOfDay: string): void {
    this.bgColors.forEach(bgCol => {
      if(bgCol.name.toLowerCase() === namePartOfDay.toLowerCase()) {
        this._backgroundColor = bgCol.bgColor;
      }
    })
  }

}
