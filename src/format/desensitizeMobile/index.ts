import regex from '@/regex';

const desensitizeMobile = (mobile: string | number) => {
  const _phone = mobile.toString();

  if (!regex.mobile.test(_phone)) {
    throw new Error('No valid mobile number');
  }

  const reg = /(\d{3})\d{4}(\d{4})/;
  return _phone.replace(reg, '$1****$2');
};

export default desensitizeMobile;
