export {}

declare global {
    interface String {
        toFirstLetterUpperCase(): string;
    }
  }

//don't redefine if it's already there
if (!String.prototype.hasOwnProperty('toFirstLetterUpperCase')) {
    String.prototype.toFirstLetterUpperCase = function (): string {
      let chars: string;
      chars = '';
      for (let index = 0; index < this.length; index++) {
          const element = this[index];
          if (index === 0)
            chars += element.toUpperCase();
          else
          chars += element;
      }
      return chars;
    }
}