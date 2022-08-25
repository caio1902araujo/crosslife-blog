import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState();

  const request = React.useCallback( async (url, options) => {
    let response;
    let json;

    try{
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();

      if(response.ok === false) throw new Error('Infelizmente não conseguimos carregar todo o conteúdo, por favor tente novamente mais tarde ou recarregue a página');

    }
    catch(e){
      json = null;
      if (e instanceof TypeError) {
        setError('Você esta sem internet, verifique sua conexão e tente novamente');
      } else{
        setError('Infelizmente não conseguimos carregar todo o conteúdo, por favor tente novamente mais tarde ou recarregue a página');
      }
    }
    finally{
      setData(json);
      setLoading(false);
      return {response, json};
    }
  }, []);

  return {
    data,
    setData,
    error,
    loading,
    request
  }
}

export default useFetch;
