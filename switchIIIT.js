// const switchIIIT = (inn) => {
//     switch(inn){
//         case "Indian Institute of Information Technology, Design & Manufacturing, Kancheepuram" : 
//             for (const i in iiitkan) {
//                 branch.options[i] = new Option(iiitkan[i]);
//             } 
//             break;
//         case "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior" : 
//             for (const i in iiitgwa) {
//                 branch.options[i] = new Option(iiitgwa[i]);
//             } 
//             break;
//         case "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacture Jabalpur" : 
//             for (const i in iiitjab) {
//                 branch.options[i] = new Option(iiitjab[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Lucknow" : 
//             for (const i in iiitluc) {
//                 branch.options[i] = new Option(iiitluc[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology(IIIT) Kottayam" : 
//             for (const i in iiitkott) {
//                 branch.options[i] = new Option(iiitkott[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Design & Manufacturing Kurnool, Andhra Pradesh" : 
//             for (const i in iiitkur) {
//                 branch.options[i] = new Option(iiitkur[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology (IIIT) Nagpur" : 
//             for (const i in iiitnag) {
//                 branch.options[i] = new Option(iiitnag[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology, Allahabad" : 
//             for (const i in iiitall) {
//                 branch.options[i] = new Option(iiitall[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Bhagalpur" : 
//             for (const i in iiitbha) {
//                 branch.options[i] = new Option(iiitbha[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology (IIIT), Sri City, Chittoor" : 
//             for (const i in iiitsri) {
//                 branch.options[i] = new Option(iiitsri[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Manipur" : 
//             for (const i in iiitman) {
//                 branch.options[i] = new Option(iiitman[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology (IIIT) Pune" : 
//             for (const i in iiitpun) {
//                 branch.options[i] = new Option(iiitpun[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology (IIIT) Ranchi" : 
//             for (const i in iiitran) {
//                 branch.options[i] = new Option(iiitran[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology(IIIT) Kota, Rajasthan" : 
//             for (const i in iiitkota) {
//                 branch.options[i] = new Option(iiitkota[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology, Raichur, Karnataka" : 
//             for (const i in iiitrai) {
//                 branch.options[i] = new Option(iiitrai[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology(IIIT), Vadodara, Gujrat" : 
//             for (const i in iiitvad) {
//                 branch.options[i] = new Option(iiitvad[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology(IIIT) Una, Himachal Pradesh" : 
//             for (const i in iiituna) {
//                 branch.options[i] = new Option(iiituna[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Surat" : 
//             for (const i in iiitsur) {
//                 branch.options[i] = new Option(iiitsur[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Tiruchirappalli" : 
//             for (const i in iiittri) {
//                 branch.options[i] = new Option(iiittri[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Guwahati" : 
//             for (const i in iiitguw) {
//                 branch.options[i] = new Option(iiitguw[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology(IIIT) Dharwad" : 
//             for (const i in iiitdha) {
//                 branch.options[i] = new Option(iiitdha[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology Bhopal" : 
//             for (const i in iiitbho) {
//                 branch.options[i] = new Option(iiitbho[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology(IIIT) Kilohrad, Sonepat, Haryana" : 
//             for (const i in iiitkil) {
//                 branch.options[i] = new Option(iiitkil[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology(IIIT) Kalyani, West Bengal" : 
//             for (const i in iiitkal) {
//                 branch.options[i] = new Option(iiitkal[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology, Agartala" : 
//             for (const i in iiitag) {
//                 branch.options[i] = new Option(iiitag[i]);
//             } 
//             break;
//         case "Indian Institute of Information Technology, Vadodara International Campus Diu (IIITVICD)" : 
//             for (const i in iiitvicd) {
//                 branch.options[i] = new Option(iiitvicd[i]);
//             } 
//             break;
//     }
// }





const switchIIIT = (inn) => {
    switch(inn) {
        case "Indian Institute of Information Technology, Design & Manufacturing, Kancheepuram": 
            for (const i in iiitkan) {
                branch.add(new Option(iiitkan[i]));
            } 
            break;
        case "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior": 
            for (const i in iiitgwa) {
                branch.add(new Option(iiitgwa[i]));
            } 
            break;
        case "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacture Jabalpur": 
            for (const i in iiitjab) {
                branch.add(new Option(iiitjab[i]));
            } 
            break;
        case "Indian Institute of Information Technology Lucknow": 
            for (const i in iiitluc) {
                branch.add(new Option(iiitluc[i]));
            } 
            break;
        case "Indian Institute of Information Technology(IIIT) Kottayam": 
            for (const i in iiitkott) {
                branch.add(new Option(iiitkott[i]));
            } 
            break;
        case "Indian Institute of Information Technology Design & Manufacturing Kurnool, Andhra Pradesh": 
            for (const i in iiitkur) {
                branch.add(new Option(iiitkur[i]));
            } 
            break;
        case "Indian Institute of Information Technology (IIIT) Nagpur": 
            for (const i in iiitnag) {
                branch.add(new Option(iiitnag[i]));
            } 
            break;
        case "Indian Institute of Information Technology, Allahabad": 
            for (const i in iiitall) {
                branch.add(new Option(iiitall[i]));
            } 
            break;
        case "Indian Institute of Information Technology Bhagalpur": 
            for (const i in iiitbha) {
                branch.add(new Option(iiitbha[i]));
            } 
            break;
        case "Indian Institute of Information Technology (IIIT), Sri City, Chittoor": 
            for (const i in iiitsri) {
                branch.add(new Option(iiitsri[i]));
            } 
            break;
        case "Indian Institute of Information Technology Manipur": 
            for (const i in iiitman) {
                branch.add(new Option(iiitman[i]));
            } 
            break;
        case "Indian Institute of Information Technology (IIIT) Pune": 
            for (const i in iiitpun) {
                branch.add(new Option(iiitpun[i]));
            } 
            break;
        case "Indian Institute of Information Technology (IIIT) Ranchi": 
            for (const i in iiitran) {
                branch.add(new Option(iiitran[i]));
            } 
            break;
        case "Indian Institute of Information Technology(IIIT) Kota, Rajasthan": 
            for (const i in iiitkota) {
                branch.add(new Option(iiitkota[i]));
            } 
            break;
        case "Indian Institute of Information Technology, Raichur, Karnataka": 
            for (const i in iiitrai) {
                branch.add(new Option(iiitrai[i]));
            } 
            break;
        case "Indian Institute of Information Technology(IIIT), Vadodara, Gujrat": 
            for (const i in iiitvad) {
                branch.add(new Option(iiitvad[i]));
            } 
            break;
        case "Indian Institute of Information Technology(IIIT) Una, Himachal Pradesh": 
            for (const i in iiituna) {
                branch.add(new Option(iiituna[i]));
            } 
            break;
        case "Indian Institute of Information Technology Surat": 
            for (const i in iiitsur) {
                branch.add(new Option(iiitsur[i]));
            } 
            break;
        case "Indian Institute of Information Technology Tiruchirappalli": 
            for (const i in iiittri) {
                branch.add(new Option(iiittri[i]));
            } 
            break;
        case "Indian Institute of Information Technology Guwahati": 
            for (const i in iiitguw) {
                branch.add(new Option(iiitguw[i]));
            } 
            break;
        case "Indian Institute of Information Technology(IIIT) Dharwad": 
            for (const i in iiitdha) {
                branch.add(new Option(iiitdha[i]));
            } 
            break;
        case "Indian Institute of Information Technology Bhopal": 
            for (const i in iiitbho) {
                branch.add(new Option(iiitbho[i]));
            } 
            break;
        case "Indian Institute of Information Technology(IIIT) Kilohrad, Sonepat, Haryana": 
            for (const i in iiitkil) {
                branch.add(new Option(iiitkil[i]));
            } 
            break;
        case "Indian Institute of Information Technology(IIIT) Kalyani, West Bengal": 
            for (const i in iiitkal) {
                branch.add(new Option(iiitkal[i]));
            } 
            break;
        case "Indian Institute of Information Technology, Agartala": 
            for (const i in iiitag) {
                branch.add(new Option(iiitag[i]));
            } 
            break;
        case "Indian Institute of Information Technology, Vadodara International Campus Diu (IIITVICD)": 
            for (const i in iiitvicd) {
                branch.add(new Option(iiitvicd[i]));
            } 
            break;
    }
}
