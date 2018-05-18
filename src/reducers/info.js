const initialState = {
	count:0,
	trg: [
    {
      id: 1,
      category: 'T-Shirt',
      name: 'Old skool',
      price: 120,
      vendorcode: '594780',
      image:"/img/bicycle-1.jpg",
      count:0
    },
    {
      id: 2,
      category: 'Sneakers',
    name: 'Old skool',
    price: 70,
    vendorcode: '594781',
    image:"/img/bicycle-1.jpg",
    count:0
    },
    {
      id: 3,
      category: 'CITY BIKE',
    name: 'Genus',
    price: 95,
    vendorcode: '594782',
    image:"/img/bicycle-1.jpg",
    count:0
    },
    {
    	id:4,
    	category: 'HYBRID',
    name: 'ANDROMEDA',
    price: 300,
    vendorcode: '594783',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    
    ,
    {
     id:5,
        category: 'ROAD BIKE',
    name: 'PMON',
    price: 480,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:6,
        category: 'BMX',
    name: 'HET',
    price: 240,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:7,
        category: 'HYBRID',
    name: 'CRAS',
    price: 530,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    },

    
    {
      id: 8,
      category: 'T-Shirt',
      name: 'Old skool',
      price: 120,
      vendorcode: '594780',
      image:"/img/bicycle-1.jpg",
      count:0
    },
    {
      id: 9,
      category: 'Sneakers',
    name: 'Old skool',
    price: 70,
    vendorcode: '594781',
    image:"/img/bicycle-1.jpg",
    count:0
    },
    {
      id: 10,
      category: 'CITY BIKE',
    name: 'Genus',
    price: 95,
    vendorcode: '594782',
    image:"/img/bicycle-1.jpg",
    count:0
    },
    {
        id:11,
        category: 'HYBRID',
    name: 'ANDROMEDA',
    price: 300,
    vendorcode: '594783',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:12,
        category: 'CITY BIKE',
    name: 'Giant MX3 ',
    price: 350,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:13,
        category: 'ROAD BIKE',
    name: 'Vector',
    price: 580,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:14,
        category: 'BMX',
    name: 'Aura',
    price: 640,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:15,
        category: 'ROAD BIKE',
    name: 'LAZE',
    price: 930,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:16,
        category: 'CITY BIKE',
    name: 'Giant MX3 ',
    price: 390,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:17,
        category: 'ROAD BIKE',
    name: 'Vector',
    price: 510,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:18,
        category: 'BMX',
    name: 'Aura',
    price: 610,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:19,
        category: 'ROAD BIKE',
    name: 'LAZE',
    price: 330,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    },
    {
        id:20,
        category: 'HYBRID',
    name: 'ANDROMEDA',
    price: 500,
    vendorcode: '594783',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:21,
        category: 'CITY BIKE',
    name: 'BON ',
    price: 710,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:22,
        category: 'ROAD BIKE',
    name: 'Vector',
    price: 430,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:23,
        category: 'BMX',
    name: 'Aura',
    price: 690,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:24,
        category: 'ROAD BIKE',
    name: 'LAZE',
    price: 870,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:25,
        category: 'CITY BIKE',
    name: 'Giant MX3 ',
    price: 380,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:26,
        category: 'ROAD BIKE',
    name: 'Vector',
    price: 220,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:27,
        category: 'BMX',
    name: 'Aura',
    price: 210,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:28,
        category: 'ROAD BIKE',
    name: 'TRACE',
    price: 990,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
  ],
  cartProd:[],
  filter:'',
  trgInView:[
        {
      id: 1,
      category: 'T-Shirt',
      name: 'Old skool',
      price: 120,
      vendorcode: '594780',
      image:"/img/bicycle-1.jpg",
      count:0
    },
    {
      id: 2,
      category: 'Sneakers',
    name: 'Old skool',
    price: 70,
    vendorcode: '594781',
    image:"/img/bicycle-1.jpg",
    count:0
    },
    {
      id: 3,
      category: 'CITY BIKE',
    name: 'Genus',
    price: 95,
    vendorcode: '594782',
    image:"/img/bicycle-1.jpg",
    count:0
    },
    {
        id:4,
        category: 'HYBRID',
    name: 'ANDROMEDA',
    price: 300,
    vendorcode: '594783',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    
    {
     id:5,
        category: 'ROAD BIKE',
    name: 'PMON',
    price: 480,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:6,
        category: 'BMX',
    name: 'HET',
    price: 240,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ,
    {
        id:7,
        category: 'HYBRID',
    name: 'CRAS',
    price: 530,
    vendorcode: '594784',
    image:"/img/bicycle-1.jpg",
    count:0
    }
    ],
  countProdInView:9,
  typesInFilters:[],
  clearAll:false
 
}



export default function productsInfo(state = initialState, action) {

	let compareNumeric = (a, b) => {
	  if (a.price > b.price) {return 1;}
	  if (a.price < b.price) {return -1;}
	}
	let backCompareNumeric = (a, b) => {
	  if (a.price < b.price) {return 1;}
	  if (a.price > b.price) {return -1;}
	}
	let compareNumericAlphabet = (a,b) => {
        if (a.name[0] === b.name[0]) {
            if (a.name[1] > b.name[1]) {return 1;}
            if (a.name[1] < b.name[1]) {return -1;}
        }
	  if (a.name[0] > b.name[0]) {return 1;}
	  if (a.name[0] < b.name[0]) {return -1;}
	}

	let checkInTypes = (types) => {
		if (state.typesInFilters.indexOf(action.payload) === -1) {
			state.typesInFilters.push(action.payload);	
		} else {
			state.typesInFilters.splice(state.typesInFilters.indexOf(action.payload),1);
		}
		return state.typesInFilters;
	}

	const getThisId = function(id) {
		for (var key in state.trg) {
			if (key == action.payload) {
				return key;
			}
	}	
	
}

	switch (action.type) {
		case "SET_CART":
		return {...state, count: action.payload}
		case "SET_PROD":
		return {...state, trg: state.trg.map((item, index) => {
			if (item.id == action.payload) { item.count += 1;	}
			 	return item;
			}), 
			cartProd: state.trg.filter((item, index) => {
				return item.count > 0;
			})
		}
		case "REMOVE_COUNTCART":
		return {...state, count: action.payload}
		case "REMOVE_PROD":
		return {...state, cartProd: state.cartProd.filter((item, index) => { 
					if (item.id != action.payload) {  return item; }
				}),
				trg: state.trg.map((item,index) => {
					if (item.id == action.payload) {
						item.count = 0;
					}
					return item;
				})
			}
		case "REDUCECOUNT_CART": 
		return {...state, count: action.payload}
		case "REDUCE_PROD":
		return {...state, 
			trg: state.trg.map((item, index) => {
			if (item.id == action.payload) { item.count -= 1;	}
			 	return item;
			 	
			}), 
			cartProd: state.trg.filter((item, index) => {
				return item.count > 0;
			})}
		case "FILTER_CHEAPER":
		return {...state, trgInView: state.trg.filter((item,index) => {
            if (state.typesInFilters.indexOf(item.category) != -1) {return item;}
            if (state.typesInFilters.length == 0) {return item;}
        }).sort(compareNumeric).slice(0, state.countProdInView),filter:'cheaper'}
		case "FILTER_EXPENSIVE":
		return {...state, trgInView: state.trg.filter((item,index) => {
            if (state.typesInFilters.indexOf(item.category) != -1) {return item;}
            if (state.typesInFilters.length == 0) {return item;}
        }).sort(backCompareNumeric).slice(0, state.countProdInView),filter:'expensive'}
		case "FILTER_ALPHABETICAL":
		return {...state, trgInView: state.trg.filter((item,index) => {
            if (state.typesInFilters.indexOf(item.category) != -1) {return item;}
            if (state.typesInFilters.length == 0) {return item;}
        }).sort(compareNumericAlphabet).slice(0, state.countProdInView),filter:'alphabet'}
		case "ADD_TYPE":
		return {...state, typesInFilters : checkInTypes()}
		case "SHOW_TYPE":
		return {...state, trgInView: state.trg.filter((item,index) => {
			if (state.typesInFilters.indexOf(item.category) != -1) {return item;}
            if (state.typesInFilters.length == 0) {return item;}
		}).slice(0, state.countProdInView).sort(function(a, b) {
              switch (state.filter) {
                case 'cheaper':
                    if (a.price > b.price) {return 1;}
                    if (a.price < b.price) {return -1;}
                 break; 
                 case 'expensive':
                    if (a.price < b.price) {return 1;}
                    if (a.price > b.price) {return -1;}
                 break; 
                 case 'alphabet': 
                    if (a.name[0] > b.name[0]) {return 1;}
                    if (a.name[0] < b.name[0]) {return -1;}
                break;    
              }
})
    }
		case "CLEAR_TYPE":
		return {...state, trgInView: state.trg.slice(0, state.countProdInView).sort(function(a, b) {
          switch (state.filter) {
            case 'cheaper':
                if (a.price > b.price) {return 1;}
                if (a.price < b.price) {return -1;}
             break; 
             case 'expensive':
                if (a.price < b.price) {return 1;}
                if (a.price > b.price) {return -1;}
             break; 
             case 'alphabet': 
                if (a.name[0] > b.name[0]) {return 1;}
                if (a.name[0] < b.name[0]) {return -1;}
            break;    
          }

        }),typesInFilters:[],clearAll:!state.clearAll}
        case "SEARCH_PRODUCT":
        return {...state, trgInView: state.trg.filter((item,index) => {
                if (action.payload.length == 1) {
                    if (action.payload.charAt(0).toUpperCase() === item.name[0]) {return item;}
                }
                else {
                    if (item.name.toUpperCase().indexOf(action.payload.toUpperCase()) != -1 && action.payload.charAt(0).toUpperCase() === item.name[0]) {return item;}
                }
                if (action.payload.length == 0) {
                    return item;
                } 
            }).sort(function(a, b) {
              switch (state.filter) {
                case 'cheaper':
                    if (a.price > b.price) {return 1;}
                    if (a.price < b.price) {return -1;}
                 break; 
                 case 'expensive':
                    if (a.price < b.price) {return 1;}
                    if (a.price > b.price) {return -1;}
                 break; 
                 case 'alphabet': 
                    if (a.name[0] > b.name[0]) {return 1;}
                    if (a.name[0] < b.name[0]) {return -1;}
                break;    
              }
})
        }
		default:
			return state
	}

	return state;
}