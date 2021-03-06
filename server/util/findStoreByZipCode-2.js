const findStoreByZipCode = (zip) => {
  const stores = {
    "1001": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "South Tampa",
      "db-id": 1001,
      state: "Florida",
    },
    "1004": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "St. Pete",
      "db-id": 1004,
      state: "Florida",
    },
    "1003": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Countryside",
      "db-id": 1003,
      state: "Florida",
    },
    "1002": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Carrollwood",
      "db-id": 1002,
      state: "Florida",
    },
    "1009": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Wesley Chapel",
      "db-id": 1009,
      state: "Florida",
    },
    "1006": {
      "delivery-days": ["Sunday", "Monday"],
      store: "Brandon",
      "db-id": 1006,
      state: "Florida",
    },
    "7100": {
      "delivery-days": ["Sunday", "Monday"],
      store: "Plant City",
      "db-id": 7100,
      state: "Florida",
    },
    "1010": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Sarasota",
      "db-id": 1010,
      state: "Florida",
    },
    "1104": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Boca",
      "db-id": 1104,
      state: "Florida",
    },
    "1102": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Ft. Lauderdale",
      "db-id": 1102,
      state: "Florida",
    },
    "1101": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Plantation",
      "db-id": 1101,
      state: "Florida",
    },
    "7003": {
      "delivery-days": ["Sunday", "Monday"],
      store: "Miami",
      "db-id": 7003,
      state: "Florida",
    },
    "1202": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Winter Park",
      "db-id": 1202,
      state: "Florida",
    },
    "1201": {
      "delivery-days": ["Sunday", "Monday", "Wednesday"],
      store: "Dr. Phillips",
      "db-id": 1201,
      state: "Florida",
    },
    "7004": {
      "delivery-days": ["Sunday"],
      store: "West Palm",
      "db-id": 7004,
      state: "Florida",
    },
    "7005": {
      "delivery-days": ["Sunday"],
      store: "Ft. Myers",
      "db-id": 7005,
      state: "Florida",
    },
    Gainseville: {
      "delivery-days": ["Sunday"],
      store: "Gainseville",
      "db-id": "",
      state: "Florida",
    },
    "7008": {
      "delivery-days": ["Sunday"],
      store: "Jacksonville",
      "db-id": 7008,
      state: "Florida",
    },
    "7009": {
      "delivery-days": ["Sunday"],
      store: "Naples",
      "db-id": 7009,
      state: "Florida",
    },
    "5001": {
      "delivery-days": ["Sunday"],
      store: "Atlanta",
      "db-id": 5001,
      state: "Georgia",
    },
  };

  const locateStore = (storeId, zipCode) => {
    return {
      zipcode: zipCode,
      ...stores[storeId],
    };
  };

  const zipCode = {
    "33602": (zip) => locateStore(1001, zip),
    "33603": (zip) => locateStore(1001, zip),
    "33605": (zip) => locateStore(1001, zip),
    "33606": (zip) => locateStore(1001, zip),
    "33607": (zip) => locateStore(1001, zip),
    "33609": (zip) => locateStore(1001, zip),
    "33611": (zip) => locateStore(1001, zip),
    "33616": (zip) => locateStore(1001, zip),
    "33621": (zip) => locateStore(1001, zip),
    "33629": (zip) => locateStore(1001, zip),
    "33677": (zip) => locateStore(1001, zip),
    "33701": (zip) => locateStore(1004, zip),
    "33702": (zip) => locateStore(1004, zip),
    "33703": (zip) => locateStore(1004, zip),
    "33704": (zip) => locateStore(1004, zip),
    "33705": (zip) => locateStore(1004, zip),
    "33706": (zip) => locateStore(1004, zip),
    "33707": (zip) => locateStore(1004, zip),
    "33708": (zip) => locateStore(1004, zip),
    "33709": (zip) => locateStore(1004, zip),
    "33710": (zip) => locateStore(1004, zip),
    "33711": (zip) => locateStore(1004, zip),
    "33712": (zip) => locateStore(1004, zip),
    "33713": (zip) => locateStore(1004, zip),
    "33714": (zip) => locateStore(1004, zip),
    "33715": (zip) => locateStore(1004, zip),
    "33716": (zip) => locateStore(1004, zip),
    "33733": (zip) => locateStore(1004, zip),
    "33760": (zip) => locateStore(1004, zip),
    "33762": (zip) => locateStore(1004, zip),
    "33770": (zip) => locateStore(1004, zip),
    "33771": (zip) => locateStore(1004, zip),
    "33772": (zip) => locateStore(1004, zip),
    "33773": (zip) => locateStore(1004, zip),
    "33774": (zip) => locateStore(1004, zip),
    "33776": (zip) => locateStore(1004, zip),
    "33777": (zip) => locateStore(1004, zip),
    "33778": (zip) => locateStore(1004, zip),
    "33781": (zip) => locateStore(1004, zip),
    "33782": (zip) => locateStore(1004, zip),
    "33785": (zip) => locateStore(1004, zip),
    "33755": (zip) => locateStore(1003, zip),
    "33756": (zip) => locateStore(1003, zip),
    "33759": (zip) => locateStore(1003, zip),
    "33761": (zip) => locateStore(1003, zip),
    "33763": (zip) => locateStore(1003, zip),
    "33764": (zip) => locateStore(1003, zip),
    "33765": (zip) => locateStore(1003, zip),
    "33767": (zip) => locateStore(1003, zip),
    "34652": (zip) => locateStore(1003, zip),
    "34653": (zip) => locateStore(1003, zip),
    "34655": (zip) => locateStore(1003, zip),
    "34660": (zip) => locateStore(1003, zip),
    "34677": (zip) => locateStore(1003, zip),
    "34681": (zip) => locateStore(1003, zip),
    "34683": (zip) => locateStore(1003, zip),
    "34684": (zip) => locateStore(1003, zip),
    "34685": (zip) => locateStore(1003, zip),
    "34688": (zip) => locateStore(1003, zip),
    "34689": (zip) => locateStore(1003, zip),
    "34690": (zip) => locateStore(1003, zip),
    "34691": (zip) => locateStore(1003, zip),
    "34695": (zip) => locateStore(1003, zip),
    "34696": (zip) => locateStore(1003, zip),
    "34698": (zip) => locateStore(1003, zip),
    "33626": (zip) => locateStore(1003, zip),
    "33635": (zip) => locateStore(1003, zip),
    "34654": (zip) => locateStore(1003, zip),
    "33604": (zip) => locateStore(1002, zip),
    "33610": (zip) => locateStore(1002, zip),
    "33612": (zip) => locateStore(1002, zip),
    "33613": (zip) => locateStore(1002, zip),
    "33614": (zip) => locateStore(1002, zip),
    "33615": (zip) => locateStore(1002, zip),
    "33617": (zip) => locateStore(1002, zip),
    "33618": (zip) => locateStore(1002, zip),
    "33620": (zip) => locateStore(1002, zip),
    "33624": (zip) => locateStore(1002, zip),
    "33625": (zip) => locateStore(1002, zip),
    "33634": (zip) => locateStore(1002, zip),
    "33637": (zip) => locateStore(1002, zip),
    "33556": (zip) => locateStore(1002, zip),
    "33684": (zip) => locateStore(1002, zip),
    "33558": (zip) => locateStore(1002, zip),
    "34638": (zip) => locateStore(1002, zip),
    "33525": (zip) => locateStore(1009, zip),
    "33540": (zip) => locateStore(1009, zip),
    "33541": (zip) => locateStore(1009, zip),
    "33542": (zip) => locateStore(1009, zip),
    "33543": (zip) => locateStore(1009, zip),
    "33544": (zip) => locateStore(1009, zip),
    "33545": (zip) => locateStore(1009, zip),
    "33548": (zip) => locateStore(1009, zip),
    "33549": (zip) => locateStore(1009, zip),
    "33559": (zip) => locateStore(1009, zip),
    "33592": (zip) => locateStore(1009, zip),
    "33647": (zip) => locateStore(1009, zip),
    "34637": (zip) => locateStore(1009, zip),
    "34639": (zip) => locateStore(1009, zip),
    "33510": (zip) => locateStore(1006, zip),
    "33511": (zip) => locateStore(1006, zip),
    "33534": (zip) => locateStore(1006, zip),
    "33547": (zip) => locateStore(1006, zip),
    "33569": (zip) => locateStore(1006, zip),
    "33578": (zip) => locateStore(1006, zip),
    "33579": (zip) => locateStore(1006, zip),
    "33584": (zip) => locateStore(1006, zip),
    "33594": (zip) => locateStore(1006, zip),
    "33596": (zip) => locateStore(1006, zip),
    "33619": (zip) => locateStore(1006, zip),
    "33570": (zip) => locateStore(1006, zip),
    "33572": (zip) => locateStore(1006, zip),
    "33563": (zip) => locateStore(7100, zip),
    "33565": (zip) => locateStore(7100, zip),
    "33566": (zip) => locateStore(7100, zip),
    "33567": (zip) => locateStore(7100, zip),
    "33801": (zip) => locateStore(7100, zip),
    "33803": (zip) => locateStore(7100, zip),
    "33805": (zip) => locateStore(7100, zip),
    "33809": (zip) => locateStore(7100, zip),
    "33810": (zip) => locateStore(7100, zip),
    "33811": (zip) => locateStore(7100, zip),
    "33812": (zip) => locateStore(7100, zip),
    "33813": (zip) => locateStore(7100, zip),
    "33815": (zip) => locateStore(7100, zip),
    "33527": (zip) => locateStore(7100, zip),
    "34201": (zip) => locateStore(1010, zip),
    "34202": (zip) => locateStore(1010, zip),
    "34203": (zip) => locateStore(1010, zip),
    "34205": (zip) => locateStore(1010, zip),
    "34207": (zip) => locateStore(1010, zip),
    "34208": (zip) => locateStore(1010, zip),
    "34209": (zip) => locateStore(1010, zip),
    "34210": (zip) => locateStore(1010, zip),
    "34211": (zip) => locateStore(1010, zip),
    "34212": (zip) => locateStore(1010, zip),
    "34215": (zip) => locateStore(1010, zip),
    "34216": (zip) => locateStore(1010, zip),
    "34217": (zip) => locateStore(1010, zip),
    "34218": (zip) => locateStore(1010, zip),
    "34221": (zip) => locateStore(1010, zip),
    "34222": (zip) => locateStore(1010, zip),
    "34228": (zip) => locateStore(1010, zip),
    "34229": (zip) => locateStore(1010, zip),
    "34231": (zip) => locateStore(1010, zip),
    "34232": (zip) => locateStore(1010, zip),
    "34233": (zip) => locateStore(1010, zip),
    "34234": (zip) => locateStore(1010, zip),
    "34235": (zip) => locateStore(1010, zip),
    "34236": (zip) => locateStore(1010, zip),
    "34237": (zip) => locateStore(1010, zip),
    "34238": (zip) => locateStore(1010, zip),
    "34239": (zip) => locateStore(1010, zip),
    "34240": (zip) => locateStore(1010, zip),
    "34241": (zip) => locateStore(1010, zip),
    "34242": (zip) => locateStore(1010, zip),
    "34243": (zip) => locateStore(1010, zip),
    "34281": (zip) => locateStore(1010, zip),
    "34219": (zip) => locateStore(1010, zip),
    "33073": (zip) => locateStore(1104, zip),
    "33426": (zip) => locateStore(1104, zip),
    "33431": (zip) => locateStore(1104, zip),
    "33432": (zip) => locateStore(1104, zip),
    "33433": (zip) => locateStore(1104, zip),
    "33434": (zip) => locateStore(1104, zip),
    "33435": (zip) => locateStore(1104, zip),
    "33436": (zip) => locateStore(1104, zip),
    "33437": (zip) => locateStore(1104, zip),
    "33441": (zip) => locateStore(1104, zip),
    "33442": (zip) => locateStore(1104, zip),
    "33444": (zip) => locateStore(1104, zip),
    "33445": (zip) => locateStore(1104, zip),
    "33446": (zip) => locateStore(1104, zip),
    "33462": (zip) => locateStore(1104, zip),
    "33467": (zip) => locateStore(1104, zip),
    "33472": (zip) => locateStore(1104, zip),
    "33473": (zip) => locateStore(1104, zip),
    "33483": (zip) => locateStore(1104, zip),
    "33484": (zip) => locateStore(1104, zip),
    "33486": (zip) => locateStore(1104, zip),
    "33487": (zip) => locateStore(1104, zip),
    "33496": (zip) => locateStore(1104, zip),
    "33498": (zip) => locateStore(1104, zip),
    "33004": (zip) => locateStore(1102, zip),
    "33008": (zip) => locateStore(1102, zip),
    "33009": (zip) => locateStore(1102, zip),
    "33019": (zip) => locateStore(1102, zip),
    "33020": (zip) => locateStore(1102, zip),
    "33022": (zip) => locateStore(1102, zip),
    "33060": (zip) => locateStore(1102, zip),
    "33062": (zip) => locateStore(1102, zip),
    "33064": (zip) => locateStore(1102, zip),
    "33301": (zip) => locateStore(1102, zip),
    "33304": (zip) => locateStore(1102, zip),
    "33305": (zip) => locateStore(1102, zip),
    "33306": (zip) => locateStore(1102, zip),
    "33308": (zip) => locateStore(1102, zip),
    "33309": (zip) => locateStore(1102, zip),
    "33315": (zip) => locateStore(1102, zip),
    "33316": (zip) => locateStore(1102, zip),
    "33334": (zip) => locateStore(1102, zip),
    "33394": (zip) => locateStore(1102, zip),
    "33021": (zip) => locateStore(1102, zip),
    "33311": (zip) => locateStore(1102, zip),
    "33312": (zip) => locateStore(1102, zip),
    "33023": (zip) => locateStore(1101, zip),
    "33024": (zip) => locateStore(1101, zip),
    "33025": (zip) => locateStore(1101, zip),
    "33026": (zip) => locateStore(1101, zip),
    "33065": (zip) => locateStore(1101, zip),
    "33068": (zip) => locateStore(1101, zip),
    "33071": (zip) => locateStore(1101, zip),
    "33081": (zip) => locateStore(1101, zip),
    "33082": (zip) => locateStore(1101, zip),
    "33083": (zip) => locateStore(1101, zip),
    "33084": (zip) => locateStore(1101, zip),
    "33313": (zip) => locateStore(1101, zip),
    "33314": (zip) => locateStore(1101, zip),
    "33317": (zip) => locateStore(1101, zip),
    "33318": (zip) => locateStore(1101, zip),
    "33319": (zip) => locateStore(1101, zip),
    "33321": (zip) => locateStore(1101, zip),
    "33322": (zip) => locateStore(1101, zip),
    "33323": (zip) => locateStore(1101, zip),
    "33324": (zip) => locateStore(1101, zip),
    "33325": (zip) => locateStore(1101, zip),
    "33326": (zip) => locateStore(1101, zip),
    "33327": (zip) => locateStore(1101, zip),
    "33328": (zip) => locateStore(1101, zip),
    "33330": (zip) => locateStore(1101, zip),
    "33331": (zip) => locateStore(1101, zip),
    "33332": (zip) => locateStore(1101, zip),
    "33351": (zip) => locateStore(1101, zip),
    "33026": (zip) => locateStore(1101, zip),
    "33067": (zip) => locateStore(1101, zip),
    "33076": (zip) => locateStore(1101, zip),
    "33428": (zip) => locateStore(1101, zip),
    "33063": (zip) => locateStore(1101, zip),
    "33066": (zip) => locateStore(1101, zip),
    "33069": (zip) => locateStore(1101, zip),
    "33002": (zip) => locateStore(7003, zip),
    "33010": (zip) => locateStore(7003, zip),
    "33011": (zip) => locateStore(7003, zip),
    "33012": (zip) => locateStore(7003, zip),
    "33013": (zip) => locateStore(7003, zip),
    "33014": (zip) => locateStore(7003, zip),
    "33015": (zip) => locateStore(7003, zip),
    "33016": (zip) => locateStore(7003, zip),
    "33017": (zip) => locateStore(7003, zip),
    "33018": (zip) => locateStore(7003, zip),
    "33054": (zip) => locateStore(7003, zip),
    "33055": (zip) => locateStore(7003, zip),
    "33056": (zip) => locateStore(7003, zip),
    "33101": (zip) => locateStore(7003, zip),
    "33102": (zip) => locateStore(7003, zip),
    "33106": (zip) => locateStore(7003, zip),
    "33111": (zip) => locateStore(7003, zip),
    "33112": (zip) => locateStore(7003, zip),
    "33114": (zip) => locateStore(7003, zip),
    "33122": (zip) => locateStore(7003, zip),
    "33124": (zip) => locateStore(7003, zip),
    "33125": (zip) => locateStore(7003, zip),
    "33126": (zip) => locateStore(7003, zip),
    "33127": (zip) => locateStore(7003, zip),
    "33128": (zip) => locateStore(7003, zip),
    "33129": (zip) => locateStore(7003, zip),
    "33130": (zip) => locateStore(7003, zip),
    "33131": (zip) => locateStore(7003, zip),
    "33132": (zip) => locateStore(7003, zip),
    "33133": (zip) => locateStore(7003, zip),
    "33134": (zip) => locateStore(7003, zip),
    "33135": (zip) => locateStore(7003, zip),
    "33136": (zip) => locateStore(7003, zip),
    "33137": (zip) => locateStore(7003, zip),
    "33138": (zip) => locateStore(7003, zip),
    "33139": (zip) => locateStore(7003, zip),
    "33140": (zip) => locateStore(7003, zip),
    "33141": (zip) => locateStore(7003, zip),
    "33142": (zip) => locateStore(7003, zip),
    "33143": (zip) => locateStore(7003, zip),
    "33144": (zip) => locateStore(7003, zip),
    "33145": (zip) => locateStore(7003, zip),
    "33146": (zip) => locateStore(7003, zip),
    "33147": (zip) => locateStore(7003, zip),
    "33150": (zip) => locateStore(7003, zip),
    "33151": (zip) => locateStore(7003, zip),
    "33152": (zip) => locateStore(7003, zip),
    "33153": (zip) => locateStore(7003, zip),
    "33154": (zip) => locateStore(7003, zip),
    "33155": (zip) => locateStore(7003, zip),
    "33156": (zip) => locateStore(7003, zip),
    "33157": (zip) => locateStore(7003, zip),
    "33158": (zip) => locateStore(7003, zip),
    "33160": (zip) => locateStore(7003, zip),
    "33161": (zip) => locateStore(7003, zip),
    "33162": (zip) => locateStore(7003, zip),
    "33163": (zip) => locateStore(7003, zip),
    "33164": (zip) => locateStore(7003, zip),
    "33165": (zip) => locateStore(7003, zip),
    "33166": (zip) => locateStore(7003, zip),
    "33167": (zip) => locateStore(7003, zip),
    "33168": (zip) => locateStore(7003, zip),
    "33169": (zip) => locateStore(7003, zip),
    "33172": (zip) => locateStore(7003, zip),
    "33173": (zip) => locateStore(7003, zip),
    "33174": (zip) => locateStore(7003, zip),
    "33175": (zip) => locateStore(7003, zip),
    "33176": (zip) => locateStore(7003, zip),
    "33178": (zip) => locateStore(7003, zip),
    "33179": (zip) => locateStore(7003, zip),
    "33180": (zip) => locateStore(7003, zip),
    "33181": (zip) => locateStore(7003, zip),
    "33182": (zip) => locateStore(7003, zip),
    "33183": (zip) => locateStore(7003, zip),
    "33184": (zip) => locateStore(7003, zip),
    "33185": (zip) => locateStore(7003, zip),
    "33186": (zip) => locateStore(7003, zip),
    "33188": (zip) => locateStore(7003, zip),
    "33191": (zip) => locateStore(7003, zip),
    "33192": (zip) => locateStore(7003, zip),
    "33193": (zip) => locateStore(7003, zip),
    "33195": (zip) => locateStore(7003, zip),
    "33198": (zip) => locateStore(7003, zip),
    "33199": (zip) => locateStore(7003, zip),
    "33206": (zip) => locateStore(7003, zip),
    "33222": (zip) => locateStore(7003, zip),
    "33231": (zip) => locateStore(7003, zip),
    "33233": (zip) => locateStore(7003, zip),
    "33234": (zip) => locateStore(7003, zip),
    "33238": (zip) => locateStore(7003, zip),
    "33242": (zip) => locateStore(7003, zip),
    "33243": (zip) => locateStore(7003, zip),
    "33245": (zip) => locateStore(7003, zip),
    "33247": (zip) => locateStore(7003, zip),
    "33255": (zip) => locateStore(7003, zip),
    "33256": (zip) => locateStore(7003, zip),
    "33261": (zip) => locateStore(7003, zip),
    "33265": (zip) => locateStore(7003, zip),
    "33266": (zip) => locateStore(7003, zip),
    "33269": (zip) => locateStore(7003, zip),
    "33280": (zip) => locateStore(7003, zip),
    "33299": (zip) => locateStore(7003, zip),
    "33189": (zip) => locateStore(7003, zip),
    "33196": (zip) => locateStore(7003, zip),
    "33177": (zip) => locateStore(7003, zip),
    "33032": (zip) => locateStore(7003, zip),
    "33027": (zip) => locateStore(7003, zip),
    "33028": (zip) => locateStore(7003, zip),
    "33029": (zip) => locateStore(7003, zip),
    "32701": (zip) => locateStore(1202, zip),
    "32707": (zip) => locateStore(1202, zip),
    "32712": (zip) => locateStore(1202, zip),
    "32714": (zip) => locateStore(1202, zip),
    "32730": (zip) => locateStore(1202, zip),
    "32746": (zip) => locateStore(1202, zip),
    "32750": (zip) => locateStore(1202, zip),
    "32751": (zip) => locateStore(1202, zip),
    "32752": (zip) => locateStore(1202, zip),
    "32765": (zip) => locateStore(1202, zip),
    "32771": (zip) => locateStore(1202, zip),
    "32773": (zip) => locateStore(1202, zip),
    "32779": (zip) => locateStore(1202, zip),
    "32789": (zip) => locateStore(1202, zip),
    "32792": (zip) => locateStore(1202, zip),
    "32801": (zip) => locateStore(1202, zip),
    "32803": (zip) => locateStore(1202, zip),
    "32804": (zip) => locateStore(1202, zip),
    "32805": (zip) => locateStore(1202, zip),
    "32806": (zip) => locateStore(1202, zip),
    "32807": (zip) => locateStore(1202, zip),
    "32808": (zip) => locateStore(1202, zip),
    "32810": (zip) => locateStore(1202, zip),
    "32812": (zip) => locateStore(1202, zip),
    "32814": (zip) => locateStore(1202, zip),
    "32816": (zip) => locateStore(1202, zip),
    "32817": (zip) => locateStore(1202, zip),
    "32822": (zip) => locateStore(1202, zip),
    "32825": (zip) => locateStore(1202, zip),
    "32826": (zip) => locateStore(1202, zip),
    "32828": (zip) => locateStore(1202, zip),
    "32829": (zip) => locateStore(1202, zip),
    "32708": (zip) => locateStore(1202, zip),
    "32809": (zip) => locateStore(1202, zip),
    "32703": (zip) => locateStore(1202, zip),
    "32811": (zip) => locateStore(1201, zip),
    "32818": (zip) => locateStore(1201, zip),
    "32819": (zip) => locateStore(1201, zip),
    "32821": (zip) => locateStore(1201, zip),
    "32824": (zip) => locateStore(1201, zip),
    "32827": (zip) => locateStore(1201, zip),
    "32830": (zip) => locateStore(1201, zip),
    "32835": (zip) => locateStore(1201, zip),
    "32836": (zip) => locateStore(1201, zip),
    "32837": (zip) => locateStore(1201, zip),
    "32839": (zip) => locateStore(1201, zip),
    "33896": (zip) => locateStore(1201, zip),
    "34734": (zip) => locateStore(1201, zip),
    "34741": (zip) => locateStore(1201, zip),
    "34743": (zip) => locateStore(1201, zip),
    "34744": (zip) => locateStore(1201, zip),
    "34746": (zip) => locateStore(1201, zip),
    "34747": (zip) => locateStore(1201, zip),
    "34756": (zip) => locateStore(1201, zip),
    "34760": (zip) => locateStore(1201, zip),
    "34761": (zip) => locateStore(1201, zip),
    "34786": (zip) => locateStore(1201, zip),
    "34787": (zip) => locateStore(1201, zip),
    "34771": (zip) => locateStore(1201, zip),
    "32832": (zip) => locateStore(1201, zip),
    "33407": (zip) => locateStore(7004, zip),
    "33418": (zip) => locateStore(7004, zip),
    "33410": (zip) => locateStore(7004, zip),
    "33417": (zip) => locateStore(7004, zip),
    "33404": (zip) => locateStore(7004, zip),
    "33409": (zip) => locateStore(7004, zip),
    "33403": (zip) => locateStore(7004, zip),
    "33401": (zip) => locateStore(7004, zip),
    "33408": (zip) => locateStore(7004, zip),
    "33413": (zip) => locateStore(7004, zip),
    "33415": (zip) => locateStore(7004, zip),
    "33406": (zip) => locateStore(7004, zip),
    "33458": (zip) => locateStore(7004, zip),
    "33405": (zip) => locateStore(7004, zip),
    "33477": (zip) => locateStore(7004, zip),
    "33461": (zip) => locateStore(7004, zip),
    "33463": (zip) => locateStore(7004, zip),
    "33467": (zip) => locateStore(7004, zip),
    "33460": (zip) => locateStore(7004, zip),
    "33462": (zip) => locateStore(7004, zip),
    "33480": (zip) => locateStore(7004, zip),
    "33411": (zip) => locateStore(7004, zip),
    "33414": (zip) => locateStore(7004, zip),
    "33903": (zip) => locateStore(7005, zip),
    "33909": (zip) => locateStore(7005, zip),
    "33917": (zip) => locateStore(7005, zip),
    "33990": (zip) => locateStore(7005, zip),
    "33918": (zip) => locateStore(7005, zip),
    "33901": (zip) => locateStore(7005, zip),
    "33916": (zip) => locateStore(7005, zip),
    "33993": (zip) => locateStore(7005, zip),
    "33905": (zip) => locateStore(7005, zip),
    "33991": (zip) => locateStore(7005, zip),
    "33904": (zip) => locateStore(7005, zip),
    "33919": (zip) => locateStore(7005, zip),
    "33907": (zip) => locateStore(7005, zip),
    "33966": (zip) => locateStore(7005, zip),
    "33914": (zip) => locateStore(7005, zip),
    "33913": (zip) => locateStore(7005, zip),
    "33912": (zip) => locateStore(7005, zip),
    "33971": (zip) => locateStore(7005, zip),
    "33908": (zip) => locateStore(7005, zip),
    "33920": (zip) => locateStore(7005, zip),
    "33973": (zip) => locateStore(7005, zip),
    "33931": (zip) => locateStore(7005, zip),
    "33976": (zip) => locateStore(7005, zip),
    "33967": (zip) => locateStore(7005, zip),
    "33928": (zip) => locateStore(7005, zip),
    "33972": (zip) => locateStore(7005, zip),
    "33936": (zip) => locateStore(7005, zip),
    "33974": (zip) => locateStore(7005, zip),
    "33965": (zip) => locateStore(7005, zip),
    "32601": (zip) => locateStore("Gainseville", zip),
    "32609": (zip) => locateStore("Gainseville", zip),
    "32605": (zip) => locateStore("Gainseville", zip),
    "32603": (zip) => locateStore("Gainseville", zip),
    "32612": (zip) => locateStore("Gainseville", zip),
    "32607": (zip) => locateStore("Gainseville", zip),
    "32608": (zip) => locateStore("Gainseville", zip),
    "32641": (zip) => locateStore("Gainseville", zip),
    "32606": (zip) => locateStore("Gainseville", zip),
    "32667": (zip) => locateStore("Gainseville", zip),
    "32202": (zip) => locateStore(7008, zip),
    "32206": (zip) => locateStore(7008, zip),
    "32201": (zip) => locateStore(7008, zip),
    "32209": (zip) => locateStore(7008, zip),
    "32204": (zip) => locateStore(7008, zip),
    "32207": (zip) => locateStore(7008, zip),
    "32232": (zip) => locateStore(7008, zip),
    "32203": (zip) => locateStore(7008, zip),
    "32211": (zip) => locateStore(7008, zip),
    "32255": (zip) => locateStore(7008, zip),
    "32208": (zip) => locateStore(7008, zip),
    "32254": (zip) => locateStore(7008, zip),
    "32205": (zip) => locateStore(7008, zip),
    "32277": (zip) => locateStore(7008, zip),
    "32235": (zip) => locateStore(7008, zip),
    "32231": (zip) => locateStore(7008, zip),
    "32247": (zip) => locateStore(7008, zip),
    "32216": (zip) => locateStore(7008, zip),
    "32210": (zip) => locateStore(7008, zip),
    "32218": (zip) => locateStore(7008, zip),
    "32219": (zip) => locateStore(7008, zip),
    "32217": (zip) => locateStore(7008, zip),
    "32236": (zip) => locateStore(7008, zip),
    "32225": (zip) => locateStore(7008, zip),
    "32239": (zip) => locateStore(7008, zip),
    "32246": (zip) => locateStore(7008, zip),
    "32212": (zip) => locateStore(7008, zip),
    "32244": (zip) => locateStore(7008, zip),
    "32245": (zip) => locateStore(7008, zip),
    "32256": (zip) => locateStore(7008, zip),
    "32099": (zip) => locateStore(7008, zip),
    "32257": (zip) => locateStore(7008, zip),
    "32238": (zip) => locateStore(7008, zip),
    "32224": (zip) => locateStore(7008, zip),
    "32214": (zip) => locateStore(7008, zip),
    "32237": (zip) => locateStore(7008, zip),
    "32223": (zip) => locateStore(7008, zip),
    "32241": (zip) => locateStore(7008, zip),
    "32229": (zip) => locateStore(7008, zip),
    "32258": (zip) => locateStore(7008, zip),
    "32233": (zip) => locateStore(7008, zip),
    "32006": (zip) => locateStore(7008, zip),
    "32067": (zip) => locateStore(7008, zip),
    "32250": (zip) => locateStore(7008, zip),
    "32266": (zip) => locateStore(7008, zip),
    "32259": (zip) => locateStore(7008, zip),
    "32227": (zip) => locateStore(7008, zip),
    "32081": (zip) => locateStore(7008, zip),
    "32082": (zip) => locateStore(7008, zip),
    "32260": (zip) => locateStore(7008, zip),
    "32226": (zip) => locateStore(7008, zip),
    "34102": (zip) => locateStore(7009, zip),
    "34104": (zip) => locateStore(7009, zip),
    "34112": (zip) => locateStore(7009, zip),
    "34105": (zip) => locateStore(7009, zip),
    "34106": (zip) => locateStore(7009, zip),
    "34108": (zip) => locateStore(7009, zip),
    "34109": (zip) => locateStore(7009, zip),
    "34119": (zip) => locateStore(7009, zip),
    "34114": (zip) => locateStore(7009, zip),
    "34117": (zip) => locateStore(7009, zip),
    "34110": (zip) => locateStore(7009, zip),
    "34107": (zip) => locateStore(7009, zip),
    "34120": (zip) => locateStore(7009, zip),
    "34134": (zip) => locateStore(7009, zip),
    "34135": (zip) => locateStore(7009, zip),
    "34145": (zip) => locateStore(7009, zip),
    "34133": (zip) => locateStore(7009, zip),
    "34146": (zip) => locateStore(7009, zip),
    "33928": (zip) => locateStore(7009, zip),
    "33931": (zip) => locateStore(7009, zip),
    "34136": (zip) => locateStore(7009, zip),
    "34140": (zip) => locateStore(7009, zip),
    "33932": (zip) => locateStore(7009, zip),
    "30004": (zip) => locateStore(5001, zip),
    "30005": (zip) => locateStore(5001, zip),
    "30009": (zip) => locateStore(5001, zip),
    "30075": (zip) => locateStore(5001, zip),
    "30076": (zip) => locateStore(5001, zip),
    "30114": (zip) => locateStore(5001, zip),
    "30115": (zip) => locateStore(5001, zip),
    "30188": (zip) => locateStore(5001, zip),
    "30189": (zip) => locateStore(5001, zip),
    "30024": (zip) => locateStore(5001, zip),
    "30040": (zip) => locateStore(5001, zip),
    "30097": (zip) => locateStore(5001, zip),
    "30519": (zip) => locateStore(5001, zip),
    "30041": (zip) => locateStore(5001, zip),
    "30518": (zip) => locateStore(5001, zip),
    "30028": (zip) => locateStore(5001, zip),
    "30043": (zip) => locateStore(5001, zip),
    "30067": (zip) => locateStore(5001, zip),
    "30068": (zip) => locateStore(5001, zip),
    "30080": (zip) => locateStore(5001, zip),
    "30305": (zip) => locateStore(5001, zip),
    "30306": (zip) => locateStore(5001, zip),
    "30309": (zip) => locateStore(5001, zip),
    "30319": (zip) => locateStore(5001, zip),
    "30324": (zip) => locateStore(5001, zip),
    "30326": (zip) => locateStore(5001, zip),
    "30327": (zip) => locateStore(5001, zip),
    "30328": (zip) => locateStore(5001, zip),
    "30329": (zip) => locateStore(5001, zip),
    "30338": (zip) => locateStore(5001, zip),
    "30339": (zip) => locateStore(5001, zip),
    "30340": (zip) => locateStore(5001, zip),
    "30341": (zip) => locateStore(5001, zip),
    "30342": (zip) => locateStore(5001, zip),
    "30345": (zip) => locateStore(5001, zip),
    "30346": (zip) => locateStore(5001, zip),
    "30350": (zip) => locateStore(5001, zip),
    "30360": (zip) => locateStore(5001, zip),
    "30004": (zip) => locateStore(5001, zip),
    "30009": (zip) => locateStore(5001, zip),
    "30062": (zip) => locateStore(5001, zip),
    "30066": (zip) => locateStore(5001, zip),
    "30075": (zip) => locateStore(5001, zip),
    "30076": (zip) => locateStore(5001, zip),
    "30102": (zip) => locateStore(5001, zip),
    "30114": (zip) => locateStore(5001, zip),
    "30115": (zip) => locateStore(5001, zip),
    "30144": (zip) => locateStore(5001, zip),
    "30188": (zip) => locateStore(5001, zip),
    "30189": (zip) => locateStore(5001, zip),
    "30005": (zip) => locateStore(5001, zip),
    "30022": (zip) => locateStore(5001, zip),
    "30024": (zip) => locateStore(5001, zip),
    "30040": (zip) => locateStore(5001, zip),
    "30041": (zip) => locateStore(5001, zip),
    "30043": (zip) => locateStore(5001, zip),
    "30044": (zip) => locateStore(5001, zip),
    "30045": (zip) => locateStore(5001, zip),
    "30046": (zip) => locateStore(5001, zip),
    "30047": (zip) => locateStore(5001, zip),
    "30071": (zip) => locateStore(5001, zip),
    "30092": (zip) => locateStore(5001, zip),
    "30093": (zip) => locateStore(5001, zip),
    "30096": (zip) => locateStore(5001, zip),
    "30097": (zip) => locateStore(5001, zip),
    "30518": (zip) => locateStore(5001, zip),
    "30519": (zip) => locateStore(5001, zip),
    "30060": (zip) => locateStore(5001, zip),
    "30021": (zip) => locateStore(5001, zip),
    "30022": (zip) => locateStore(5001, zip),
    "30084": (zip) => locateStore(5001, zip),
    "30033": (zip) => locateStore(5001, zip),
    "30322": (zip) => locateStore(5001, zip),
    "30076": (zip) => locateStore(5001, zip),
    "30308": (zip) => locateStore(5001, zip),
    "30126": (zip) => locateStore(5001, zip),
  };

  const result = zipCode[zip];
  if(result) {
    return result(zip);
  }
  else {
    return false;
  }
};

module.exports = findStoreByZipCode;
