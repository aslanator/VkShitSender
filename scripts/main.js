'use strict';

console.log('test2');

function Shit() {
  console.log('run');

  this.head = document.querySelector('head');

  this.html = `
  <div class="shit-search-container">
    <div class="shit-search-button"></div>
    <div class="emoji_tt_wrap shit-tt-wrap">
      <div class="shit-result-container" id="shit-result-container">
        <div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div>
        <div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div>
        <div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div><div class="shit-result-item"></div>
      </div>
      <div class="emoji_tabs shit-search-bottom clear_fix">
        <div class="im-chat-input--txt-wrap _im_text_wrap">
          <div class="im_editable im-chat-input--text _im_text" tabindex="0" contenteditable="true" id="shit-search-field" role="textbox" aria-multiline="false"></div>
          <div class="placeholder"><div class="ph_input"><div class="ph_content">Поиск...</div></div></div>
        </div>
      </div>
    </div>
  </div>
  `;

  this.addShitSearchButton = function () {
    this.buttonsContainer.insertAdjacentHTML('afterbegin', this.html);
    new SimpleBar(document.getElementById('shit-result-container'));

    this.shitSearchButton = document.querySelector('.shit-search-button');
    this.shitTTwrap = document.querySelector('.shit-tt-wrap');

    this.shitButtonListener = this.shitSearchButton.addEventListener('click', () => {
      this.openShitWindow();
    });

    document.addEventListener('click', () => {
      if (!findClassInPath('shit-search-container', event.path)) {
        this.closeShitWindow();
      }
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

  this.openShitWindow = function () {
    this.shitTTwrap.classList.add('active');
  }

  this.closeShitWindow = function () {
    this.shitTTwrap.classList.remove('active');
  }



  this.mutationConfig = { childList: true, characterData: true };
  this.observer = new MutationObserver(this.afterMutation.bind(this));
  this.observer.observe(this.head, this.mutationConfig);
}





var shitPlugin = new Shit();