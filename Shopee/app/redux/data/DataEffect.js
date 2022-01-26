import {
  data_request,
  data_success,
  data_failure
} from './DataAction'

export const getData = async () => {
  dispatch(data_request);
  try {
    let response = await fetch(
      'https://rosterbuster.aero/wp-content/uploads/dummy-response',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    let res = await response.text();
    let json = JSON.parse(res);
    console.log('respons', json);
    dispatch(data_success(json));
  } catch (e) {
    console.log('error', e);
    dispatch(data_failure());
  }
}