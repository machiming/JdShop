const state = {
  cart: [],
  goodsitem: [
    {
      "id": 1,
      "price": 1991,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goods/5aa783aeN9df05256.jpg!q70.jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 2,
      "price": 1992,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (2).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 3,
      "price": 1993,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (3).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 4,
      "price": 1994,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (4).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 5,
      "price": 1995,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (5).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 6,
      "price": 1996,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (6).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 7,
      "price": 1997,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (7).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 8,
      "price": 1998,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (8).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 9,
      "price": 1999,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (9).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 10,
      "price": 191,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (10).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
    {
      "id": 11,
      "price": 192,
      "title": "收到付款收到回复可接受的快捷方式",
      "img": "static/goodslist/goodslist (11).jpg",
      "des": "买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"
    },
  ],
};
const mutations = {
  domsg(state, Obj) {
    Obj.count++
  },
  del(state, Obj) {
    --Obj.count
  },
  add(state, Obj) {
    Obj.count++;
  },
  adds(state, {id}) {
    let record = state.cart.find(n => n.id == id);
    record.count++
  },
  tocart(state, {product}) {
    let record = state.cart.find(n => n.id == product.id);
    if (!record) {
      state.cart.push({id: product.id, count: 1});
    } else {
      record.count++
    }

    console.log(state.cart)
  }
};
const getters = {
  cart: state => state.cart,
  cartList: state => state.cart.map(({id, count}) => {
    let product = state.goodsitem.find(n => n.id == id);
    return {
      ...product, count
    }
  }),
  totalPrice: (state, getters) => {
    let total = 0;
    getters.cartList.forEach(n => {
      total += n.price * n.count
    });
    return total
  }
};
const actions = {
  addToCart({commit}, product) {
    console.log(product);
    commit('adds', {
      id: product.id
    })
  },
  ToCart({commit}, product) {
    console.log(product);
    commit('tocart', {
      product: product
    })
  }
};
export default {state, mutations, getters, actions};


