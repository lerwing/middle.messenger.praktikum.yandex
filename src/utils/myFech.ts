enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
interface Options {
  method: METHODS;
  data: Document | XMLHttpRequestBodyInit | null | undefined;
  timeout?: number;
  tries?: number;
}

export function myFech(url: string, options: Options): Promise<unknown> {
  const { tries = 1 } = options;
  const transport = new HTTPTransport();
  function onError(e: unknown) {
    const triesLeft = tries - 1;
    if (!triesLeft) {
      throw e;
    }
    return myFech(url, { ...options, tries: triesLeft });
  }

  return transport.request(url, options).catch(onError);
}

function queryStringify(data: Document | BufferSource | FormData | URLSearchParams) {
  let dataStr = '?';
  Object.entries(data).forEach((element) => {
    dataStr += element[0] + '=' + element[1] + '&';
  });
  dataStr = dataStr.slice(0, -1);
  return dataStr;
}

export class HTTPTransport {
  get = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };
  put = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };
  post = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };
  delete = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };
  patch = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };
  request = (url: string, options: Options, timeout = 5000) => {
    const { method, data } = options;
    if (method === METHODS.GET) {
      if (typeof data === 'object' && data) {
        url = url + queryStringify(data);
      } else {
        throw new Error('Данные переданы не ввиде объекта');
      }
    }
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
