export class CollorChangeService {
  status: string;
  checkPasswordStrength(pass: string){
    const hasLetters = /[a-zA-Z]/.test(pass);
    const hasSymbols = /[^\w\s]/.test(pass);
    const hasNumbers = /\d/.test(pass);
    if (pass.length === 0) {
      this.status = 'untouched';
      return;
    }
    if (pass.length > 0&&pass.length < 8) {
      this.status = 'invalid';
      return;
    }
    if(hasLetters && hasSymbols && hasNumbers){
      this.status = 'hard';
      return;
    }
    if (hasLetters && hasSymbols || hasSymbols && hasNumbers || hasLetters && hasNumbers) {
      this.status = 'medium';
      return;
    }
    if (hasNumbers || hasLetters || hasSymbols) {
      this.status = 'easy';
      return;
    }
  }
  getColorSecionFirst(): string {
    switch (this.status) {
      case 'invalid':
      case 'easy':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'green';
      case 'untouched':
      default :
        return 'gray';
    }
  }

  getColorSecionSecond(): string {
    switch (this.status) {
      case 'invalid':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'green';
      case 'untouched':
      case 'easy':
      default :
        return 'gray';
    }
  }

  getColorSecionThird(): string {
    switch (this.status) {
      case 'invalid':
        return 'red';
      case 'hard':
        return 'green';
      case 'untouched':
      case 'easy':
      case 'medium':
      default :
        return 'gray';
    }
  }
}
