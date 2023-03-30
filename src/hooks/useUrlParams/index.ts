import { useCallback, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

type UrlParamsType = Record<string, string | string[]>;

const useUrlParams = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlParams = useMemo(() => {
    const result = {} as UrlParamsType;

    for (const key of searchParams.keys()) {
      if (key.endsWith('[]')) {
        result[key.replace('[]', '')] = searchParams.getAll(key);
      } else {
        const params = searchParams.getAll(key);
        result[key] = params?.length === 1 ? params[0] : params;
      }
    }

    return result;
  }, [location.search]);

  const setUrlParams = useCallback(
    (nextInit: UrlParamsType | ((data: UrlParamsType) => UrlParamsType)) => {
      if (typeof nextInit === 'function') {
        setSearchParams({ ...urlParams, ...nextInit(urlParams) });
      } else {
        setSearchParams({ ...urlParams, ...nextInit });
      }
    },
    [urlParams],
  );

  return [urlParams, setUrlParams];
};

export default useUrlParams;

/** TODO
 * 1. 初始化数据
 * 2. 路由获取数暂存
 */
