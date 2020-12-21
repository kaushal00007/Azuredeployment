export class SomethingWrongDialogModel {
  title: string;
  description: string;
  rawTitle: boolean;
  rawDescription: boolean;
  timeToClose: number;

  constructor(title: string, description: string, rawTitle: boolean, rawDescription: boolean, timeToClose: number) {
    this.title = title;
    this.description = description;
    this.rawTitle = rawTitle;
    this.rawDescription = rawDescription;
    this.timeToClose = timeToClose;
  }
}

export class SuccessDialogModel {
  title: string;
  descriptionPart1: string;
  descriptionPart2: string;
  highlightedData: string;
  timeToClose: number;

  constructor(title: string, timeToClose: number, descriptionPart1?: string, descriptionPart2?: string, highlightedData?: string) {
    this.title = title;
    this.descriptionPart1 = descriptionPart1;
    this.timeToClose = timeToClose;
    this.descriptionPart2 = descriptionPart2;
    this.highlightedData = highlightedData;
  }
}