import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

/**
 * @param {Event & {target: HTMLElement}} evt
 */
export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  loginWithId(userId) {
    console.log(`Logging in with user Id: ${userId}`);
  }

  @action
  onUserSelectChange(evt) {
    const {target} = evt;
    this.userId = target.value;
  }

  @action
  onLoginFormSubmit(evt){
    const {target} = evt;
    const userId = target.querySelector('select').value;

    evt.preventDefault();
    this.loginWithId(userId);
  }
}
