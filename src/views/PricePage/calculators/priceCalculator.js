/*eslint-disable*/

/**
 * @desc for given price it calculates the tax and discounts
 * @param object $woodObj - woodObject
 * {
    en: 120,
    boy: 305,
    kalinlik: 18,
    kalite: 'A/B',
    adet: 1,
    iskonto: 0,
    isim: wood[0], (string)
    detaylari: wood[1], (object)
    boyEkliMi: true
  }
 * @return object - same object but price added
 */
export const sitelerMasifPanelFiyatHesaplayici = woodObj => {
  let price = 0;
  if (woodObj.boyEkliMi) {
    if (woodObj.kalite === 'A/B') {
      if (woodObj.kalinlik === 18) {
        price = woodObj.detaylari.boyEkli['18'].ab.price;
      } else if (woodObj.kalinlik === 28) {
        price = woodObj.detaylari.boyEkli['28'].ab.price;
      } else {
        price = woodObj.detaylari.boyEkli['40'].ab.price;
      }
    } else if (woodObj.kalite === 'B/B') {
      if (woodObj.kalinlik === 18) {
        price = woodObj.detaylari.boyEkli['18'].bb.price;
      } else if (woodObj.kalinlik === 28) {
        price = woodObj.detaylari.boyEkli['28'].bb.price;
      } else {
        price = woodObj.detaylari.boyEkli['40'].bb.price;
      }
    } else {
    }
  } else {
    if (woodObj.kalite === 'A/B') {
      if (woodObj.kalinlik === 18) {
        price = woodObj.detaylari.boyEkli['18'].ab.price;
      } else if (woodObj.kalinlik === 28) {
        price = woodObj.detaylari.boyEkli['28'].ab.price;
      } else {
        price = woodObj.detaylari.boyEkli['40'].ab.price;
      }
    } else if (woodObj.kalite === 'B/B') {
      if (woodObj.kalinlik === 18) {
        price = woodObj.detaylari.boyEkli['18'].bb.price;
      } else if (woodObj.kalinlik === 28) {
        price = woodObj.detaylari.boyEkli['28'].bb.price;
      } else {
        price = woodObj.detaylari.boyEkli['40'].bb.price;
      }
    } else {
    }
  }

  let result =
    price * ((woodObj.adet * woodObj.en) / 10000) * woodObj.boy * ((100 - woodObj.iskonto) / 100);

  woodObj.price = result;

  return woodObj;
};

export const ahsaplarMasifPanelFiyatHesaplayici = woodObj => {
  return fetch(url, { method: 'DELETE' });
};

export const n11MasifPanelFiyatHesaplayici = woodObj => {
  return fetch(url, { method: 'DELETE' });
};
