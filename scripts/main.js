'use strict';

console.log('test2');

function Shit() {
  console.log('run');

  this.head = document.querySelector('head');

  this.html = `
  <div class="shit-search-button">
    <div class="emoji_tt_wrap shit-tt-wrap"></div>
  </div>
  `;

  this.addShitSearchButton = function () {
    this.buttonsContainer.insertAdjacentHTML('afterbegin', this.html);

    this.shitSearchButton = document.querySelector('.shit-search-button');
    this.shitTTwrap = document.querySelector('.shit-tt-wrap');

    this.shitButtonListener = this.shitSearchButton.addEventListener('click', () => {
      this.shitTTwrap.classList.add('active');
    });
  }

  this.afterMutation = function () {
    console.log('mutation');
    this.shitSearchButton = document.querySelector('.shit-search-button');
    this.buttonsContainer = document.querySelector('.im_chat-input--buttons');

    if (!this.shitSearchButton && this.buttonsContainer) {
      this.addShitSearchButton();
    }
  }



  this.mutationConfig = { childList: true, characterData: true };
  this.observer = new MutationObserver(this.afterMutation.bind(this));
  this.observer.observe(this.head, this.mutationConfig);
}





var shitPlugin = new Shit();