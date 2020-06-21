import { AjaxService, AjaxOptions } from '../../config';

export default {
  login(data: any) {
    const options: AjaxOptions = {
      method: 'get',
      url: '',
      data
    }
    return AjaxService(options)
  }
}