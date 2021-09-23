// mapbox token
const mapBoxToken =
  "pk.eyJ1IjoicHJhdGhlZXNoMSIsImEiOiJja3Q1NzE3b2owNW1uMnVwN3llbmUyajhnIn0.bGFsIBVXDrEsRdacm-aBzg";

//covid data
//historic data
const HISTORIC_DATA_API_URL =
  "https://data.covid19india.org/v4/min/timeseries.min.json";
//daily data
const DAILY_DATA_API_URL = "https://data.covid19india.org/v4/min/data.min.json";

//vaccination centre
//API Base url
const COWIN_BASE_API_URL = "https://cdn-api.co-vin.in/api";
const API_END_POINT_URL_calendarByCenter =
  "/v2/appointment/sessions/public/calendarByCenter";

// geocoding
const NOMINATIM_BASE_API_URL = "https://nominatim.openstreetmap.org";

// state code mapping
// prettier-ignore
const stateMap = {
    AN: {name: "Andaman and Nicobar Islands", latLng:[12.46975841741018, 92.79722389703363]},
    AP: {name:"Andhra Pradesh", latLng:[14.954289938003473, 78.65402072453963]},
    AR: {name: "Arunachal Pradesh", latLng:[28.236053545862053, 94.22295457802034]},
    AS: {name: "Assam", latLng:[26.36187734021463, 92.91011110351327]},
    BR: {name:"Bihar" ,latLng:[26.00994426540667, 85.71748156154506]},
    CH: {name:"Chandigarh" ,latLng:[30.7354412645371, 76.77202360217501]},
    CT: {name:"Chhattisgarh" ,latLng:[21.490729548838623, 82.0335446948367]},
    DL: {name:"Delhi" ,latLng:[28.636442412762644, 77.16205796674416]},
    DN: {name:"Daman and Diu" ,latLng:[20.201054732794773, 73.03584680181017]},
    GA: {name:"Goa" ,latLng:[15.403976113622534, 74.0534719913892]},
    GJ: {name:"Gujarat" ,latLng:[22.67351746984397, 72.11183042394401]},
    HP: {name:"Himachal Pradesh" ,latLng:[31.789186667068087, 77.1898650445589]},
    HR: {name:"Haryana" ,latLng:[29.274114230388513, 76.27843009687845]},
    JH: {name:"Jharkhand" ,latLng:[23.512146001524552, 85.38403868227613]},
    JK: {name:"Jammu and Kashmir" ,latLng:[33.83590307501808, 74.85762290239707]},
    KA: {name:"Karnataka" ,latLng:[14.995658955105167, 75.68899212249738]},
    KL: {name:"Kerala" ,latLng:[10.652047992683432, 76.38589386426908]},
    LA: {name:"Ladakh" ,latLng:[34.90692686446303, 76.97045511980484]},
    LD: {name:"Lakshadweep" ,latLng:[10.844509323700068, 72.84105889325865]},
    MH: {name:"Maharashtra" ,latLng:[19.73534540621259, 75.57699804231846]},
    ML: {name:"Meghalaya" ,latLng:[25.501988594513318, 91.4917087070507]},
    MN: {name:"Manipur" ,latLng:[24.806222736345106, 93.86323614463433]},
    MP: {name:"Madhya Pradesh" ,latLng:[23.807022696175764, 77.76143557126368]},
    MZ: {name:"Mizoram" ,latLng:[23.487567944851946, 92.84203617178747]},
    NL: {name:"Nagaland" ,latLng:[26.10172346779438, 94.53388434431864]},
    OR: {name:"Odisha" ,latLng:[20.804897061338696, 84.41666784726772]},
    PB: {name:"Punjab" ,latLng:[30.87195641246671, 75.41697425659169]},
    PY: {name:"Puducherry" ,latLng:[11.914298402176275, 79.75932906013745]},
    RJ: {name:"Rajasthan" ,latLng:[26.601654649250417, 73.63901535296378]},
    SK: {name:"Sikkim" ,latLng:[27.547646390855892, 88.43894696323599]},
    TG: {name:"Telangana" ,latLng:[17.961862988554813, 78.72566878538811]},
    TN: {name:"Tamil Nadu" ,latLng:[10.753181148681607, 78.40668145145044]},
    TR: {name:"Tripura" ,latLng:[23.79396463566396, 91.70974986612711]},
    UP: {name:"Uttar Pradesh" ,latLng:[27.22153617569504, 80.0056849838949]},
    UT: {name:"Uttarakhand" ,latLng:[30.193370806101758, 78.93787718760554]},
    WB: {name:"West Bengal" ,latLng:[23.149656217647415, 87.93605704550306]}
  }

//district mapping
//prettier ignore
const districtMap = {
  Adilabad: [19.5, 78.5],
  "Agar Malwa": [23.9342963, 76.14523314122312],
  Agra: [27.1752554, 78.0098161],
  Ahmedabad: [23.0216238, 72.5797068],
  Ahmednagar: [19.162772500000003, 74.85802430085195],
  "Airport Quarantine": [12.993374, 80.17258667392555],
  Aizawl: [23.7435236, 92.7382905],
  Ajmer: [26.4691, 74.639],
  Akola: [20.7618624, 77.19217162524623],
  Alappuzha: [9.5006651, 76.41241428564258],
  Aligarh: [27.87698975, 78.13729027600994],
  Alipurduar: [26.4851573, 89.5246926],
  Alirajpur: [22.285939550000002, 74.35468608752092],
  Almora: [29.703094999999998, 79.43317023326716],
  Alwar: [27.639077049999997, 76.6144524902045],
  Ambala: [30.3843674, 76.770421],
  "Ambedkar Nagar": [26.40349795, 82.60728148676125],
  Amethi: [26.34738315, 81.6238783207884],
  Amravati: [21.15454115, 77.64429617998744],
  Amreli: [20.866667, 70.75],
  Amritsar: [31.6343083, 74.8736788],
  Amroha: [28.9233969, 78.48831693262684],
  Anand: [22.5584995, 72.9625629],
  Anantapur: [14.6546235, 77.55625984224562],
  Anantnag: [33.7368773, 75.1455138],
  Angul: [20.8382426, 85.0973949],
  Anjaw: [28.1114301, 96.82699963398373],
  Anuppur: [23.03525965, 81.3884438474638],
  Araria: [26.26498795, 87.37162648106798],
  Aravalli: [23.48345905, 73.39881244097361],
  Ariyalur: [11.076035950000001, 79.11745538182738],
  Arwal: [25.180777149999997, 84.65920203021554],
  Ashoknagar: [24.576189, 77.7302895],
  Auraiya: [26.65573395, 79.51504701181831],
  Aurangabad: [19.877263, 75.3390241],
  Ayodhya: [26.7990707, 82.2052321],
  Azamgarh: [26.02269675, 83.02887343114848],
  Bagalkote: [16.1853166, 75.6967919],
  Bageshwar: [30.0086722, 79.9302967950447],
  Baghpat: [28.97240405, 77.33315284938224],
  Bahraich: [27.7336958, 81.47732127661058],
  Baksa: [26.62781825, 91.46148578057333],
  Balaghat: [21.966667, 80.333333],
  Balangir: [20.7502257, 83.2499464],
  Balasore: [21.5002888, 86.9202627],
  Ballari: [15.2485413, 76.8323648],
  Ballia: [25.877932549999997, 84.11995931460379],
  Balod: [20.73218365, 81.14335738365043],
  "Baloda Bazar": [21.572645950000002, 82.43670691696435],
  Balrampur: [27.4504805, 82.39541774073132],
  Banaskantha: [24.172056, 72.431134],
  Banda: [25.5008211, 80.499762],
  Bandipora: [34.497502749999995, 74.69995089313494],
  Banka: [24.8655681, 86.87278642295597],
  Bankura: [23.13195425, 87.20739720367507],
  Banswara: [23.4930788, 74.34840231310622],
  Barabanki: [26.93823105, 81.38609761204991],
  Baramulla: [34.205005650000004, 74.36221081111597],
  Baran: [24.9171512, 76.69640322489136],
  Bareilly: [28.457876, 79.40557093743058],
  Bargarh: [21.347763399999998, 83.65768298821486],
  Barmer: [25.5819034, 71.61966242777196],
  Barnala: [30.3704685, 75.504017418548],
  Barpeta: [26.34142215, 91.01674328474073],
  Barwani: [21.75194325, 74.89175175338488],
  Bastar: [19.11912825, 81.82918648971713],
  Basti: [26.724789, 82.79326865024002],
  Bathinda: [30.17911535, 75.04710156312628],
  Beed: [18.9904059, 75.7542291],
  Begusarai: [25.5127194, 86.09057109140021],
  Belagavi: [15.8572666, 74.5069343],
  "Bengaluru Rural": [13.18077825, 77.34174236923371],
  "Bengaluru Urban": [12.94514225, 77.55364499971128],
  Betul: [21.8796162, 77.87568124563079],
  Bhadohi: [25.422922749999998, 82.48843708088575],
  "Bhadradri Kothagudem": [17.71534525, 80.57149761778712],
  Bhadrak: [21.0633288, 86.5053731],
  Bhagalpur: [25.28669805, 87.13225355111148],
  Bhandara: [21.12304765, 79.79390882119336],
  Bharatpur: [27.26521245, 77.36912554739122],
  Bharuch: [21.75, 73.0],
  Bhavnagar: [21.7718836, 72.1416449],
  Bhilwara: [25.48877345, 74.69961283584024],
  Bhind: [26.5, 78.75],
  Bhiwani: [28.7931703, 76.1391283],
  Bhojpur: [25.25, 84.25],
  Bhopal: [23.2584857, 77.401989],
  Bidar: [18.083333, 77.333333],
  Bijapur: [18.7935679, 80.815939],
  Bijnor: [29.40604895, 78.48087839917878],
  Bikaner: [28.0159286, 73.3171367],
  Bilaspur: [31.3380959, 76.7611631],
  Birbhum: [24.0, 87.583333],
  Bishnupur: [24.562463649999998, 93.8012483746545],
  Biswanath: [26.7773957, 93.25694367444689],
  Bokaro: [23.699127949999998, 85.99106894165021],
  Bongaigaon: [26.4800126, 90.5580387],
  Botad: [22.1686, 71.6685],
  Boudh: [20.8415619, 84.3213321],
  Budaun: [28.06831165, 79.04607312079293],
  Budgam: [34.04796585, 74.7441397838328],
  Bulandshahr: [28.38886085, 77.97479772598118],
  Buldhana: [20.583333, 76.416667],
  Bundi: [25.5, 75.833333],
  Burhanpur: [21.3118839, 76.2291992],
  Buxar: [25.562071500000002, 84.01567204651289],
  Cachar: [24.758639950000003, 92.88166475768219],
  "Capital Complex": [27.144661, 93.72175315377072],
  Chamarajanagara: [11.9238058, 76.9393558],
  Chamba: [32.518429, 76.23086565661742],
  Chamoli: [30.499632300000002, 79.61879245944404],
  Champawat: [29.23631315, 80.10172076512075],
  Champhai: [23.6317319, 93.34931854269607],
  Chandauli: [25.1265777, 83.2496557733391],
  Chandel: [24.3197442, 94.0210988225432],
  Chandigarh: [30.7334421, 76.7797143],
  Chandrapur: [20.030975599999998, 79.35813866691342],
  Changlang: [27.1398402, 95.7382485],
  Charaideo: [27.06971635, 95.06426298389661],
  "Charkhi Dadri": [28.5919933, 76.2719817],
  Chatra: [24.20162495, 84.87817691941733],
  Chengalpattu: [12.6840886, 79.9836371],
  Chennai: [13.0836939, 80.270186],
  Chhatarpur: [24.75, 79.75],
  Chhindwara: [22.139831049999998, 78.80964495467987],
  "Chhota Udaipur": [22.3148736, 74.0141067],
  Chikkaballapura: [13.4358702, 77.7312434],
  Chikkamagaluru: [13.5, 75.5],
  Chirang: [26.6464231, 90.62415698729875],
  Chitradurga: [14.2266443, 76.4005122],
  Chitrakoot: [25.2195207, 81.102282425],
  Chittoor: [13.1601048, 79.15555061803596],
  Chittorgarh: [24.718026000000002, 74.47214697200876],
  Churachandpur: [24.378704, 93.69700149533944],
  Churu: [28.2061443, 74.69190729963461],
  Coimbatore: [11.0018115, 76.9628425],
  "Cooch Behar": [26.3223696, 89.4592445],
  Cuddalore: [11.7564329, 79.7634644],
  Cuttack: [20.4686, 85.8792],
  "Dadra and Nagar Haveli": [20.2733604, 73.0044988],
  Dahod: [22.8358542, 74.2556782],
  "Dakshin Dinajpur": [25.38703085, 88.50471505],
  "Dakshina Kannada": [12.9324457, 74.9813132],
  Daman: [20.42000485, 72.86376290300566],
  Damoh: [23.75, 79.583333],
  Dang: [20.6942515, 73.5703741],
  Darbhanga: [26.08314325, 86.03257096612822],
  Darjeeling: [27.0377554, 88.263176],
  Darrang: [26.75, 92.5],
  Datia: [25.75, 78.5],
  Dausa: [26.80486585, 76.44374569929329],
  Davanagere: [14.4661266, 75.9206361],
  Dehradun: [30.3255646, 78.0436813],
  Delhi: [28.6517178, 77.2219388],
  Deogarh: [21.5370786, 84.7301184],
  Deoghar: [24.4766423, 86.60673245386945],
  Deoria: [26.42384715, 83.76273169028727],
  "Devbhumi Dwarka": [22.224429, 69.6733919],
  Dewas: [23.0, 76.166667],
  Dhalai: [23.8253158, 91.9732226716333],
  Dhamtari: [20.7083903, 81.5485253],
  Dhanbad: [23.7952809, 86.4309638],
  Dhar: [22.5, 75.25],
  Dharmapuri: [12.09680475, 78.19304301026716],
  Dharwad: [15.4540505, 75.0066516],
  Dhemaji: [27.466831499999998, 94.51786508708852],
  Dhenkanal: [20.75, 85.5],
  Dholpur: [26.7010642, 77.896749],
  Dhubri: [26.01894625, 89.94188952461522],
  Dhule: [21.13050145, 74.47891180551228],
  Dibrugarh: [27.4844597, 94.9019447],
  "Dima Hasao": [25.400362549999997, 93.07522922678905],
  Dimapur: [25.9136459, 93.7283456],
  Dindigul: [10.3303299, 78.0673979084697],
  Dindori: [22.907368650000002, 80.88511429688029],
  Diu: [20.718174949999998, 70.93238341010638],
  Doda: [33.1774307, 75.56752281893789],
  Dumka: [24.2538512, 87.30064714192224],
  Dungarpur: [23.666667, 73.75],
  Durg: [21.19903535, 81.3979545573657],
  "East Champaran": [26.583333, 84.833333],
  "East Garo Hills": [25.61849455, 90.63421621777749],
  "East Godavari": [17.233496, 81.7225986],
  "East Jaintia Hills": [25.25157605, 92.48405006942016],
  "East Kameng": [27.3, 93.05],
  "East Khasi Hills": [25.405680850000003, 91.83546771298455],
  "East Siang": [28.3, 95.15],
  "East Sikkim": [27.279909699999997, 88.67466491506823],
  "East Singhbhum": [22.8092139, 86.2091549],
  Ernakulam: [9.98408, 76.2741457],
  Erode: [11.369204400000001, 77.67662686841793],
  Etah: [27.5541146, 78.60078640304634],
  Etawah: [26.718324350000003, 79.09025375025163],
  Faridabad: [28.4029786, 77.3103837],
  Faridkot: [30.60092505, 74.79477422840449],
  Farrukhabad: [27.43719385, 79.48912946503123],
  Fatehabad: [29.468830099999998, 75.52107146631747],
  "Fatehgarh Sahib": [30.6600764, 76.38002163710028],
  Fatehpur: [25.8435395, 80.91800397088501],
  Fazilka: [30.336099599999997, 74.11794319222481],
  Ferozepur: [30.6839733, 76.3594033],
  Firozabad: [27.17736635, 78.38991197951182],
  Gadag: [15.434515, 76.5294783],
  Gadchiroli: [19.759070350000002, 80.16228072580182],
  Gajapati: [19.19557415, 84.19297736346317],
  Ganderbal: [34.193425500000004, 74.83434976826678],
  Gandhinagar: [23.2232877, 72.6492267],
  Ganganagar: [29.9049489, 73.8792934139276],
  Ganjam: [19.4129711, 85.04710406447731],
  Garhwa: [24.15529035, 83.82522584408349],
  Gariaband: [20.42857015, 82.24698984817437],
  "Gaurela Pendra Marwahi": [22.8322152, 81.95776398945898],
  "Gautam Buddha Nagar": [28.36760975, 77.59740326369902],
  Gaya: [24.7964355, 85.0079563],
  Ghaziabad: [28.711241, 77.4445372],
  Ghazipur: [25.603508400000003, 83.50745404887138],
  "Gir Somnath": [20.9911049, 70.68806405046848],
  Giridih: [24.1608897, 86.25113503301655],
  Goalpara: [26.1783623, 90.6226683],
  Godda: [24.74334305, 87.2928506179686],
  Golaghat: [26.40490095, 94.03209112120626],
  Gomati: [23.4613369, 91.60718003817723],
  Gonda: [27.1096669, 81.9183291218813],
  Gondia: [21.455228, 80.1962729],
  Gopalganj: [26.4207265, 84.37406407415165],
  Gorakhpur: [26.67132865, 83.36458284327038],
  Gumla: [23.0916741, 84.5738480719802],
  Guna: [24.5, 77.5],
  Guntur: [16.2915189, 80.4541588],
  Gurdaspur: [32.166667, 75.316667],
  Gurugram: [28.4646148, 77.0299194],
  Gwalior: [26.2037247, 78.1573628],
  Hailakandi: [24.68845365, 92.57381528240943],
  Hamirpur: [25.75, 80.0],
  Hanumangarh: [29.367200150000002, 74.29836365065901],
  Hapur: [28.740612499999997, 77.83542556519009],
  Harda: [22.3388828, 77.0929933],
  Hardoi: [27.33857665, 80.0975264641719],
  Haridwar: [29.9384473, 78.1452985],
  Hassan: [13.0070817, 76.0992703],
  Hathras: [27.57324325, 78.11173866751716],
  Haveri: [14.7874825, 75.3996731],
  Hazaribagh: [23.9675151, 85.43884568595615],
  Hingoli: [19.54140965, 77.17376601317515],
  Hisar: [29.168807, 75.7461103],
  Hnahthial: [22.9663656, 93.01026448504744],
  Hojai: [26.009390850000003, 92.84879014262606],
  Hooghly: [22.9052114, 88.3760639],
  Hoshangabad: [22.6001502, 77.92664521413192],
  Hoshiarpur: [31.60857425, 75.84644246890946],
  Howrah: [22.5736296, 88.3251045],
  Hyderabad: [17.360589, 78.4740613],
  Idukki: [9.8497872, 76.9797914],
  "Imphal East": [24.85154025, 94.00947957721581],
  "Imphal West": [24.757326, 93.85847858025147],
  Indore: [22.7203616, 75.8681996],
  Jabalpur: [23.1608938, 79.9497702],
  Jagatsinghpur: [20.2593872, 86.1660878],
  Jagtial: [18.82135895, 78.91506632525903],
  Jaipur: [26.9154576, 75.8189817],
  Jaisalmer: [27.02801615, 70.7785056232077],
  Jajpur: [20.8522696, 86.3385714],
  Jalandhar: [31.29201065, 75.56805772253911],
  Jalaun: [26.105546, 79.42765264782076],
  Jalgaon: [20.84351185, 75.52592658756026],
  Jalna: [19.9182328, 75.8686246900443],
  Jalore: [25.3476006, 72.6260916],
  Jalpaiguri: [26.626483649999997, 88.73407701468993],
  Jammu: [32.7185614, 74.8580917],
  Jamnagar: [22.4732415, 70.0552102],
  Jamtara: [23.9232867, 86.77353493891458],
  Jamui: [24.967852049999998, 86.17351147289283],
  Jangaon: [17.746584300000002, 79.24072182693956],
  "Janjgir Champa": [21.967126399999998, 82.6647242496104],
  Jashpur: [22.76678355, 83.95304518953317],
  Jaunpur: [25.7955927, 82.48834097504385],
  "Jayashankar Bhupalapally": [18.515987199999998, 79.96939659792528],
  Jehanabad: [25.15247135, 85.00687848982191],
  Jhabua: [22.88585225, 74.72513368804519],
  Jhajjar: [28.53364155, 76.68981477716189],
  Jhalawar: [24.3132368, 76.52223626123003],
  Jhansi: [25.531031149999997, 78.65268901605349],
  Jhargram: [22.3770636, 87.04867177362203],
  Jharsuguda: [21.87705125, 84.00905063735019],
  Jhunjhunu: [28.1287995, 75.3992581],
  Jind: [29.301826249999998, 76.33847076788838],
  Jiribam: [24.6778472, 93.1549000879473],
  Jodhpur: [26.2967719, 73.0351433],
  "Jogulamba Gadwal": [16.0999202, 77.73415835077523],
  Jorhat: [26.7577925, 94.2079645],
  Junagadh: [21.5174104, 70.4642754],
  Kaimur: [24.974864349999997, 83.57643904700731],
  Kaithal: [29.822820749999998, 76.37830986647243],
  Kakching: [24.38904015, 93.88013239529906],
  Kalaburagi: [17.166667, 77.083333],
  Kalahandi: [19.75, 83.0],
  Kalimpong: [27.0702869, 88.4723676],
  Kallakurichi: [11.7406259, 78.9637131],
  Kamareddy: [18.316551, 78.05393808043348],
  Kamjong: [24.8409769, 94.52830740954334],
  Kamle: [27.7312325, 94.0964663257624],
  Kamrup: [26.12755515, 91.2998714797357],
  "Kamrup Metropolitan": [26.13526375, 91.86167062524618],
  Kancheepuram: [12.87960515, 79.70427615297989],
  Kandhamal: [20.13069385, 84.07904760590154],
  Kangpokpi: [25.1524326, 93.9714932],
  Kangra: [32.06854705, 76.24336792335127],
  Kannauj: [26.999697400000002, 79.68861212775874],
  Kannur: [11.8762254, 75.3738043],
  "Kanpur Dehat": [26.4600465, 79.85550999615592],
  "Kanpur Nagar": [26.4402119, 80.26930513416637],
  Kanyakumari: [8.079252, 77.5499338],
  Kapurthala: [31.38524095, 75.30552273989395],
  Karaikal: [10.91571, 79.8375761],
  Karauli: [26.51668105, 77.05772976517363],
  "Karbi Anglong": [26.0, 93.5],
  Kargil: [34.5594418, 76.1255982],
  Karimganj: [24.8483482, 92.33221292310328],
  Karimnagar: [18.4346438, 79.1322648],
  Karnal: [29.6803266, 76.9896254],
  Karur: [10.9301522, 78.08485454572889],
  Kasaragod: [12.5035635, 74.990834],
  Kasganj: [27.883846050000002, 78.63489003747873],
  Kathua: [32.4288215, 75.56286458392415],
  Katihar: [25.560900349999997, 87.64765353997149],
  Katni: [23.8339621, 80.392456],
  Kaushambi: [25.53609455, 81.44672838764605],
  Kendrapara: [20.50040085, 86.43170622796478],
  Kendujhar: [21.5892323, 85.66878413736906],
  Khagaria: [25.4916868, 86.69910848212217],
  Khammam: [17.5, 80.333333],
  Khandwa: [21.9778642, 76.5688282326971],
  Khargone: [21.8187743, 75.6064577],
  Khawzawl: [23.4877894, 93.14029427419158],
  Kheda: [22.75, 72.833333],
  Khordha: [20.22564715, 85.56059465125232],
  Khowai: [24.04673835, 91.62320953646798],
  Khunti: [23.10018105, 85.3454593617985],
  Kinnaur: [31.586346, 78.3968441],
  Kiphire: [25.81551155, 94.84166400470303],
  Kishanganj: [26.29863795, 87.95314810923409],
  Kishtwar: [33.2761171, 75.8169238781403],
  Kodagu: [12.38217745, 75.66531991685233],
  Koderma: [24.4931239, 85.55608107203881],
  Kohima: [25.75, 94.166667],
  Kokrajhar: [26.58687695, 90.29293105124796],
  Kolar: [13.1369996, 78.1339606],
  Kolasib: [24.18947525, 92.7133181281124],
  Kolhapur: [16.7028412, 74.2405329],
  Kolkata: [22.5726723, 88.3638815],
  Kollam: [8.8879509, 76.5955013],
  "Komaram Bheem": [17.530736750000003, 78.3911827],
  Kondagaon: [19.5885769, 81.6628742],
  Koppal: [15.3484144, 76.1547421],
  Koraput: [18.7232023, 82.6081182778727],
  Korba: [22.51976955, 82.62951462416818],
  Koriya: [23.431414349999997, 82.31393341197054],
  Kota: [25.1968256, 76.00089330885552],
  Kottayam: [9.6287383, 76.64553257390992],
  Kozhikode: [11.2450558, 75.7754716],
  "Kra Daadi": [27.96354175, 93.76656538768381],
  Krishna: [16.6691525, 80.7190024],
  Krishnagiri: [12.5188835, 78.2206536],
  Kulgam: [33.669800550000005, 75.01480232217389],
  Kullu: [32.00186325, 77.37899639741332],
  Kupwara: [34.611023599999996, 74.238478667319],
  Kurnool: [15.8309251, 78.0425373],
  Kurukshetra: [29.9693747, 76.8482787],
  "Kurung Kumey": [27.98636765, 93.15783468644102],
  Kushinagar: [26.7438272, 83.9162322],
  Kutch: [23.708787049999998, 69.82747746941271],
  "Lahaul and Spiti": [32.5038495, 77.58227188236428],
  Lakhimpur: [27.0827158, 93.9978423],
  "Lakhimpur Kheri": [27.985060150000002, 80.75384538357649],
  Lakhisarai: [25.167702900000002, 86.05935924304018],
  Lakshadweep: [10.8132489, 73.6804620941119],
  Lalitpur: [24.70038485, 78.51866758648347],
  Latehar: [23.74186545, 84.51301366522105],
  Latur: [18.35146855, 76.7551212230513],
  Lawngtlai: [22.34596495, 92.8119536068969],
  Leh: [34.1642029, 77.5848133],
  "Lepa Rada": [27.9211266, 94.74093620019156],
  Lohardaga: [23.46920055, 84.73568423071751],
  Lohit: [28.035016149999997, 96.17135154220676],
  Longding: [26.879454600000003, 95.3155652456941],
  Longleng: [26.49031725, 94.77214247303138],
  "Lower Dibang Valley": [28.21495625, 95.87877403567019],
  "Lower Siang": [27.80069825, 94.56502334121075],
  "Lower Subansiri": [27.8, 93.6],
  Lucknow: [26.8381, 80.9346001],
  Ludhiana: [30.9090157, 75.851601],
  Lunglei: [22.898553, 92.75192291719874],
  Madhepura: [25.9259562, 86.82042961035677],
  Madhubani: [26.350071999999997, 86.22914688962271],
  Madurai: [9.9261153, 78.1140983],
  Mahabubabad: [17.7138983, 80.04134252767227],
  Mahabubnagar: [16.696568550000002, 77.95911462089693],
  Maharajganj: [27.09254225, 83.56696261338257],
  Mahasamund: [21.1882332, 82.48484762499999],
  Mahe: [11.7021978, 75.5364701],
  Mahendragarh: [28.25, 76.166667],
  Mahisagar: [23.1916967, 73.6626352964019],
  Mahoba: [25.36176885, 79.70499475331877],
  Mainpuri: [27.2098219, 79.04813700847944],
  Majuli: [27.021952849999998, 94.32742302965544],
  Malappuram: [11.10684475, 76.10995510466662],
  Malda: [25.0057449, 88.1398483],
  Malkangiri: [18.35835435, 81.89823748747048],
  Mamit: [23.75590845, 92.45173568830637],
  Mancherial: [18.8761795, 79.4449696],
  Mandi: [31.6723392, 76.95331690779145],
  Mandla: [22.68536625, 80.58150561711888],
  Mandsaur: [24.2651306, 75.38718193725012],
  Mandya: [12.5238888, 76.8961961],
  Mansa: [29.8769971, 75.4889866137018],
  Mathura: [27.633333, 77.583333],
  Mau: [26.0376878, 83.49793418499047],
  Mayiladuthurai: [11.155182199999999, 79.62739425974078],
  Mayurbhanj: [21.75, 86.5],
  Medak: [17.9375095, 78.21174498510584],
  "Medchal Malkajgiri": [17.53498345, 78.52463873502381],
  Meerut: [29.000652549999998, 77.76822875372174],
  Mehsana: [23.601262849999998, 72.37415155167554],
  Mirzapur: [24.9356347, 82.64770129811649],
  Moga: [30.7839866, 75.16057422541162],
  Mokokchung: [26.4795861, 94.51052754768273],
  Mon: [26.75, 94.833333],
  Moradabad: [28.8638424, 78.80577833091104],
  Morbi: [22.8176662, 70.8345928],
  Morena: [26.166667, 77.5],
  Morigaon: [26.2551844, 92.32883054999999],
  Mulugu: [18.1932372, 79.9413676],
  Mumbai: [19.0759899, 72.8773928],
  Mungeli: [22.0661098, 81.6874282],
  Munger: [25.22081165, 86.51720367235285],
  Murshidabad: [24.1745993, 88.2721335],
  Muzaffarnagar: [29.44800635, 77.74068502568672],
  Muzaffarpur: [26.1486581, 85.34001282479626],
  Mysuru: [12.3051828, 76.6553609],
  Nabarangapur: [19.60962325, 82.29876854111501],
  Nadia: [23.48454125, 88.55676307470536],
  Nagaon: [26.30414915, 92.71605974430346],
  Nagapattinam: [10.805627600000001, 79.824659783024],
  Nagarkurnool: [16.415762649999998, 78.68304333132829],
  Nagaur: [27.0607859, 74.17667537582712],
  Nagpur: [21.1498134, 79.0820556],
  Nainital: [29.2031392, 79.4176945],
  Nalanda: [25.1364914, 85.44365464855682],
  Nalbari: [26.42386165, 91.45122754621168],
  Nalgonda: [16.8579636, 79.21749353315548],
  Namakkal: [11.284224850000001, 78.16615283668403],
  Namsai: [27.71403055, 96.01597093953018],
  Nanded: [19.17257215, 77.29141237169956],
  Nandurbar: [21.365998949999998, 74.28400358178766],
  Narayanpet: [16.700551750000002, 77.61648447017446],
  Narayanpur: [19.5842032, 81.1136985512029],
  Narmada: [21.738303950000002, 73.62736015921328],
  Narsinghpur: [22.9467047, 79.1980228],
  Nashik: [20.0112475, 73.7902364],
  Navsari: [20.952407, 72.9323831],
  Nawada: [24.818123999999997, 85.5185562336921],
  Nayagarh: [20.1160666, 85.11195643843573],
  Neemuch: [24.63044655, 75.18339614635457],
  Nilgiris: [11.4, 76.7],
  Nirmal: [19.091520950000003, 78.39660898429065],
  Niwari: [25.312470400000002, 78.66785016924982],
  Nizamabad: [18.75, 78.25],
  Noney: [24.8625867, 93.6237454],
  "North 24 Parganas": [22.7182799, 88.64248090898516],
  "North Garo Hills": [25.8619841, 90.70177048839348],
  "North Goa": [15.60444125, 74.00172406307475],
  "North Sikkim": [27.74891905, 88.5214387098307],
  "North Tripura": [24.092147599999997, 92.24512135019847],
  "North and Middle Andaman": [12.61123865, 92.83165406414926],
  Nuapada: [20.769099750000002, 82.51862845874122],
  Nuh: [28.097345150000002, 77.05085582101852],
  Osmanabad: [18.16984395, 76.11796321159572],
  "Other State": [27.9135638, 75.4881051],
  "Pakke Kessang": [27.15828555, 93.15615024389129],
  Pakur: [24.6379064, 87.8556962],
  Palakkad: [10.78789845, 76.47408711165895],
  Palamu: [23.916667, 84.083333],
  Palghar: [19.68086385, 72.82537342511341],
  Pali: [25.6040908, 73.41560878556902],
  Palwal: [28.176958900000002, 77.37311203790532],
  Panchkula: [30.616216450000003, 77.04197804321875],
  Panchmahal: [23.1284825, 73.6058222],
  Panipat: [29.3912753, 76.9771675],
  Panna: [24.5, 80.25],
  "Papum Pare": [27.286366649999998, 93.61875168206382],
  Parbhani: [19.29031365, 76.60290343431203],
  "Paschim Bardhaman": [23.64260775, 87.16448126068323],
  "Paschim Medinipur": [22.3599134, 87.41331447600871],
  Patan: [23.77405735, 71.68373465668734],
  Pathanamthitta: [9.278084100000001, 76.97374429915658],
  Pathankot: [32.2692452, 75.6528858],
  Patiala: [30.2090874, 76.3398720856221],
  Patna: [25.6093239, 85.1235252],
  "Pauri Garhwal": [29.84591115, 78.70766746320547],
  Peddapalli: [18.62065305, 79.49501710882896],
  Perambalur: [11.2287716, 78.8182555496278],
  Peren: [25.47907705, 93.72563659313207],
  Phek: [25.75, 94.5],
  Pherzawl: [24.2595653, 93.1906004],
  Pilibhit: [28.495207649999998, 80.10754080018077],
  Pithoragarh: [30.12666775, 80.48338013734374],
  Porbandar: [21.6409, 69.611],
  Prakasam: [15.5, 79.5],
  Pratapgarh: [25.75, 81.75],
  Prayagraj: [25.4381302, 81.8338005],
  Puducherry: [11.9340568, 79.8306447],
  Pudukkottai: [10.5, 78.833333],
  Pulwama: [33.89829355, 74.89634093792017],
  Pune: [18.521428, 73.8544541],
  "Purba Bardhaman": [23.391717, 87.90621212355462],
  "Purba Medinipur": [22.06217445, 87.83672383486115],
  Puri: [19.8076083, 85.8252538],
  Purnia: [26.0, 87.5],
  Purulia: [23.29614645, 86.34210770023],
  "Rae Bareli": [26.25, 81.25],
  Raichur: [16.083333, 77.166667],
  Raigad: [18.4928092, 73.13807095426539],
  Raigarh: [25.6653743, 78.4608544],
  "Railway Quarantine": [12.99299645, 80.18440293433221],
  Raipur: [21.2379469, 81.6336833],
  Raisen: [23.25, 78.083333],
  "Rajanna Sircilla": [18.452116, 78.76455837158737],
  Rajgarh: [23.87167135, 76.7748902040889],
  Rajkot: [22.3051991, 70.8028335],
  Rajnandgaon: [20.9727404, 80.69155548263583],
  Rajouri: [33.3772495, 74.3132332],
  Rajsamand: [25.29131615, 73.8244924740361],
  Ramanagara: [12.7252766, 77.2804797],
  Ramanathapuram: [9.3895523, 78.85907071521498],
  Ramban: [33.211637100000004, 75.20509890752818],
  Ramgarh: [23.598775949999997, 85.53691564663127],
  Rampur: [28.79406825, 79.1859304458554],
  Ranchi: [23.3700354, 85.3250132],
  "Ranga Reddy": [18.0130082, 79.5716545],
  Ranipet: [12.9272641, 79.3330076],
  Ratlam: [23.4805919, 74.91778971237613],
  Ratnagiri: [17.282607900000002, 73.4569787039826],
  Rayagada: [19.172095849999998, 83.3350308502498],
  Reasi: [33.069103150000004, 74.8378698208889],
  Rewa: [24.75926685, 81.65500021078341],
  Rewari: [28.1956468, 76.6165179],
  Rohtak: [28.9010899, 76.5801935],
  Rohtas: [24.93928775, 84.01945448852067],
  Rudraprayag: [30.3009965, 79.06287964782695],
  Rupnagar: [31.09168085, 76.5272673916138],
  "S.A.S. Nagar": [30.676693999999998, 76.70848831486698],
  Sabarkantha: [24.0294885, 73.0459884],
  Sagar: [23.80961225, 78.75911360578634],
  Saharanpur: [29.9880774, 77.5081299470512],
  Saharsa: [25.83264165, 86.61489283342814],
  Sahibganj: [25.2820998, 87.61850784289338],
  Saiha: [22.4995518, 92.97798988717027],
  Saitual: [23.81285685, 92.97279748183348],
  Salem: [11.6612012, 78.1602498],
  Samastipur: [25.7744929, 85.86626813370123],
  Samba: [32.57591175, 75.12034455530063],
  Sambalpur: [21.4, 83.883333],
  Sambhal: [28.61875255, 78.55087405404802],
  Sangareddy: [17.86859205, 77.8228199507381],
  Sangli: [16.8502534, 74.5948885],
  Sangrur: [30.2093363, 75.8184224340909],
  "Sant Kabir Nagar": [26.7882737, 82.9600798],
  "Saraikela-Kharsawan": [22.7464225, 85.91689291046393],
  Saran: [25.90835495, 84.78074760594323],
  Satara: [17.63612885, 74.29827807601782],
  Satna: [24.5, 81.0],
  "Sawai Madhopur": [26.22914115, 76.30453277017932],
  Sehore: [23.1156882, 77.06623939176504],
  Senapati: [25.380439600000003, 94.0569854178655],
  Seoni: [22.275878900000002, 79.721044651047],
  Serchhip: [23.385892300000002, 92.930598908176],
  Shahdol: [23.3002343, 81.364771],
  Shahjahanpur: [27.912633149999998, 79.74656294869826],
  Shajapur: [23.37074105, 76.62051527475785],
  Shamli: [29.5008816, 77.34838258540861],
  Sheikhpura: [25.12635425, 85.81510620944194],
  Sheohar: [26.49436945, 85.27280559513997],
  Sheopur: [25.6656611, 76.6954843],
  "Shi Yomi": [28.68516625, 94.23678241115617],
  Shimla: [31.1041526, 77.1709729],
  Shivamogga: [13.9326093, 75.574978],
  Shivpuri: [25.37524125, 77.82811932629714],
  Siang: [28.4, 94.55],
  Siddharthnagar: [27.2786386, 83.0639536],
  Siddipet: [18.005585099999998, 78.89611304969961],
  Sidhi: [24.25, 82.0],
  Sikar: [27.662826000000003, 75.02792628691331],
  Simdega: [22.6664325, 84.5502679119221],
  Sindhudurg: [16.135719299999998, 73.65220860183584],
  Singrauli: [24.1974432, 82.6661453],
  Sirmaur: [30.75, 77.5],
  Sirohi: [24.811404699999997, 72.83002573160249],
  Sirsa: [29.583333, 75.083333],
  Sitamarhi: [26.5876547, 85.5056744],
  Sitapur: [27.5046392, 80.82946583420815],
  Sivaganga: [9.851231, 78.53047154820717],
  Sivasagar: [26.9834936, 94.6394226],
  Siwan: [26.1310043, 84.39125660595198],
  Solan: [30.92589585, 77.08200509063624],
  Solapur: [17.84990665, 75.27632027348457],
  Sonbhadra: [24.38657525, 83.07863061278505],
  Sonipat: [29.0033144, 77.0167323],
  Sonitpur: [26.767770749999997, 92.70140885850532],
  "South 24 Parganas": [22.1815262, 88.54843766912074],
  "South Andaman": [10.7056905, 92.48746789633373],
  "South Garo Hills": [25.347969, 90.56577725964563],
  "South Goa": [15.21961365, 74.1152813019196],
  "South Salmara Mankachar": [25.7604472, 89.8928061082699],
  "South Sikkim": [27.74891905, 88.5214387098307],
  "South Tripura": [23.5, 91.666667],
  "South West Garo Hills": [25.448052699999998, 89.9987852968616],
  "South West Khasi Hills": [25.330722100000003, 91.32645013786319],
  "Sri Muktsar Sahib": [30.4692, 74.5182],
  Srikakulam: [18.32002205, 83.91607719937166],
  Srinagar: [34.0747444, 74.8204443],
  "State Pool": [20.17396645, 85.70823219607183],
  Subarnapur: [19.08143, 84.5144503],
  Sukma: [18.26654225, 81.29252341475065],
  Sultanpur: [26.242510850000002, 82.29616931685918],
  Sundargarh: [22.13327195, 83.97965279931319],
  Supaul: [26.2768118, 86.79658662614811],
  Surajpur: [23.35151515, 82.97290272665015],
  Surat: [21.1864607, 72.8081281],
  Surendranagar: [22.75, 71.666667],
  Surguja: [22.94941835, 83.1655491457949],
  Suryapet: [17.08001385, 79.7925329742427],
  Tamenglong: [24.935401300000002, 93.56791112289724],
  Tapi: [21.1060413, 72.7008247],
  "Tarn Taran": [31.32124525, 74.84130629340785],
  Tawang: [27.5879186, 91.863733],
  "Tehri Garhwal": [30.5, 78.666667],
  Tengnoupal: [24.31392145, 94.23756082375633],
  Tenkasi: [9.031895800000001, 77.36536124793122],
  Thane: [19.1943294, 72.9701779],
  Thanjavur: [10.7860267, 79.1381497],
  Theni: [9.969664300000002, 77.47420048524822],
  Thiruvallur: [13.13014755, 79.92435386254968],
  Thiruvananthapuram: [8.5241122, 76.9360573],
  Thiruvarur: [10.73618605, 79.63318659437627],
  Thoothukkudi: [8.756745200000001, 78.07975266019861],
  Thoubal: [24.624587, 94.04247928402684],
  Thrissur: [10.5256264, 76.2132542],
  Tikamgarh: [24.85450275, 79.04698123882801],
  Tinsukia: [27.52016575, 95.5306347312879],
  Tirap: [27.03016895, 95.49791754505583],
  Tiruchirappalli: [10.804973, 78.6870296],
  Tirunelveli: [8.722388, 77.710247],
  Tirupathur: [12.453306399999999, 78.55290857022919],
  Tiruppur: [11.1017815, 77.345192],
  Tiruvannamalai: [12.22721295, 79.07015554906167],
  Tonk: [26.12214725, 75.66375373932236],
  Tuensang: [26.168505500000002, 94.85819821659115],
  Tumakuru: [13.3400771, 77.1006208],
  Udaipur: [24.578721, 73.6862571],
  Udalguri: [26.70472375, 92.04215071409463],
  "Udham Singh Nagar": [29.048098799999998, 79.4313133223357],
  Udhampur: [32.98884975, 75.12979904120976],
  Udupi: [13.3419169, 74.7473232],
  Ujjain: [23.174597, 75.7851423],
  Ukhrul: [25.109266849999997, 94.38239281654197],
  Umaria: [23.64319305, 80.94239522009255],
  Una: [31.583333, 76.25],
  Unnao: [26.57550365, 80.61376177782856],
  Unokoti: [24.19098485, 92.04604830534434],
  "Upper Dibang Valley": [28.83416675, 95.94523415398385],
  "Upper Siang": [28.73120455, 95.03773151350946],
  "Upper Subansiri": [28.3, 94.0],
  "Uttar Bastar Kanker": [20.1270026, 80.98109349472911],
  "Uttar Dinajpur": [25.8707958, 87.96259728449391],
  "Uttara Kannada": [14.724474149999999, 74.64223734496612],
  Uttarkashi: [30.9654214, 78.63368731187963],
  Vadodara: [22.2973142, 73.1942567],
  Vaishali: [25.95322565, 85.14457760191539],
  Valsad: [20.4324018, 73.1411715553577],
  Varanasi: [25.3356491, 83.0076292],
  Vellore: [12.7948109, 79.0006410968549],
  Vidisha: [23.916667, 78.0],
  Vijayapura: [16.666667, 75.916667],
  Vikarabad: [17.2702855, 77.74529700637382],
  Viluppuram: [11.9137874, 79.50789297942772],
  Virudhunagar: [9.5208936, 77.8784563961865],
  Visakhapatnam: [17.7231276, 83.3012842],
  Vizianagaram: [18.1120819, 83.4052196224888],
  Wanaparthy: [16.285294399999998, 77.98644727021286],
  "Warangal Rural": [17.94854255, 79.81612399359742],
  "Warangal Urban": [18.02625695, 79.46444493996634],
  Wardha: [20.82562315, 78.61314549522919],
  Washim: [20.28792095, 77.23606281061035],
  Wayanad: [11.715219000000001, 76.12690294658198],
  "West Champaran": [26.583333, 84.833333],
  "West Garo Hills": [25.60780175, 90.20380106122235],
  "West Godavari": [17.0, 81.166667],
  "West Jaintia Hills": [25.4425965, 92.29882747091773],
  "West Kameng": [27.4, 92.35],
  "West Karbi Anglong": [25.85291415, 92.58756812404593],
  "West Khasi Hills": [25.58173695, 91.28910306371017],
  "West Siang": [28.4, 94.55],
  "West Sikkim": [27.3607071, 88.18800245494259],
  "West Singhbhum": [22.5, 85.5],
  "West Tripura": [23.916667, 91.5],
  Wokha: [26.166667, 94.25],
  "Yadadri Bhuvanagiri": [17.42819665, 79.09049097612106],
  Yadgir: [16.7689044, 77.1380381],
  Yamunanagar: [30.2112003, 77.28638972360895],
  Yanam: [16.7333666, 82.2145164],
  Yavatmal: [20.325703750000002, 78.11691396684715],
  Zunheboto: [26.0, 94.5],
};
