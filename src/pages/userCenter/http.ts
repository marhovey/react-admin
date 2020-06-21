import { AjaxService, AjaxOptions } from '../../config';

export default {
  getData(data: any) {
    const options: AjaxOptions = {
      method: 'get',
      url: '',
      data
    }
    return AjaxService(options)
  }
}