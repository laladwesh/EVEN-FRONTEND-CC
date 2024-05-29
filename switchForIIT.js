// const switchForIIT = (inn) =>{
//     switch(inn){
//         case "Indian Institute of Technology Kharagpur" : for (const i in iitkgp) {
//             branch.options[i] = new Option(iitkgp[i]);
//         } break;
//         case "Indian Institute of Technology (BHU) Varanasi" : for (const i in iitBHU) {
//             branch.options[i] = new Option(iitBHU[i]);
//         } break;
//         case "Indian Institute of Technology Delhi" : for (const i in IITD) {
//             branch.options[i] = new Option(IITD[i]);
//         } break;
//         case "Indian Institute of Technology Roorkee" : for (const i in IITR) {
//             branch.options[i] = new Option(IITR[i]);
//         } break;
//         case "Indian Institute of Technology Bombay" : for (const i in IITB) {
//             branch.options[i] = new Option(IITB[i]);
//         } break;
//         case "Indian Institute of Technology Madras" : for (const i in IITM) {
//             branch.options[i] = new Option(IITM[i]);
//         } break;
//         case "Indian Institute of Technology Kanpur" : for (const i in IITK) {
//             branch.options[i] = new Option(IITK[i]);
//         } break;
//         case "Indian Institute of Technology (ISM) Dhanbad" : for (const i in ISMD) {
//             branch.options[i] = new Option(ISMD[i]);
//         } break;
//         case "Indian Institute of Technology Guwahati" : for (const i in IITG) {
//             branch.options[i] = new Option(IITG[i]);
//         } break;
//         case "Indian Institute of Technology Hyderabad" : for (const i in IITH) {
//             branch.options[i] = new Option(IITH[i]);
//         } break;
//         case "Indian Institute of Technology Patna" : for (const i in IITP) {
//             branch.options[i] = new Option(IITP[i]);
//         } break;
//         case "Indian Institute of Technology Ropar" : for (const i in IITRO) {
//             branch.options[i] = new Option(IITRO[i]);
//         } break;
//         case "Indian Institute of Technology Mandi" : for (const i in IITMA) {
//             branch.options[i] = new Option(IITMA[i]);
//         } break;
//         case "Indian Institute of Technology Jodhpur" : for (const i in IITJO) {
//             branch.options[i] = new Option(IITJO[i]);
//         } break;
//         case "Indian Institute of Technology Gandhinagar" : for (const i in IITGA) {
//             branch.options[i] = new Option(IITGA[i]);
//         } break;
//         case "Indian Institute of Technology Indore" : for (const i in IITI) {
//             branch.options[i] = new Option(IITI[i]);
//         } break;
//         case "Indian Institute of Technology Jammu" : for (const i in Jam) {
//             branch.options[i] = new Option(Jam[i]);
//         } break;
//         case "Indian Institute of Technology Tirupati" : for (const i in Tiru) {
//             branch.options[i] = new Option(Tiru[i]);
//         } break;
//         case "Indian Institute of Technology Palakkad" : for (const i in Pal) {
//             branch.options[i] = new Option(Pal[i]);
//         } break;
//         case "Indian Institute of Technology Dharwad" : for (const i in IITDH) {
//             branch.options[i] = new Option(IITDH[i]);
//         } break;
//         case "Indian Institute of Technology Bhilai" : for (const i in IITBhi) {
//             branch.options[i] = new Option(IITBhi[i]);
//         } break;
//         case "Indian Institute of Technology Goa" : for (const i in IITGoa) {
//             branch.options[i] = new Option(IITGoa[i]);
//         } break;
//         case "Indian Institute of Technology Bhubaneswar" : for (const i in IIT) {
//             branch.options[i] = new Option(IIT[i]);
//         } break;
//     }
// }



const switchForIIT = (inn) =>{
    switch(inn){
        case "Indian Institute of Technology Kharagpur" : 
            for (const i in iitkgp) {
                branch.add(new Option(iitkgp[i]));
            } 
            break;
        case "Indian Institute of Technology (BHU) Varanasi" : 
            for (const i in iitBHU) {
                branch.add(new Option(iitBHU[i]));
            } 
            break;
        case "Indian Institute of Technology Delhi" : 
            for (const i in IITD) {
                branch.add(new Option(IITD[i]));
            } 
            break;
        case "Indian Institute of Technology Roorkee" : 
            for (const i in IITR) {
                branch.add(new Option(IITR[i]));
            } 
            break;
        case "Indian Institute of Technology Bombay" : 
            for (const i in IITB) {
                branch.add(new Option(IITB[i]));
            } 
            break;
        case "Indian Institute of Technology Madras" : 
            for (const i in IITM) {
                branch.add(new Option(IITM[i]));
            } 
            break;
        case "Indian Institute of Technology Kanpur" : 
            for (const i in IITK) {
                branch.add(new Option(IITK[i]));
            } 
            break;
        case "Indian School of Mines Dhanbad" : 
            for (const i in ISM) {
                branch.add(new Option(ISM[i]));
            } 
            break;
        case "Indian Institute of Technology Guwahati" : 
            for (const i in IITG) {
                branch.add(new Option(IITG[i]));
            } 
            break;
        case "Indian Institute of Technology Hyderabad" : 
            for (const i in IITH) {
                branch.add(new Option(IITH[i]));
            } 
            break;
        case "Indian Institute of Technology Patna" : 
            for (const i in IITP) {
                branch.add(new Option(IITP[i]));
            } 
            break;
        case "Indian Institute of Technology Ropar" : 
            for (const i in IITRO) {
                branch.add(new Option(IITRO[i]));
            } 
            break;
        case "Indian Institute of Technology Mandi" : 
            for (const i in IITMA) {
                branch.add(new Option(IITMA[i]));
            } 
            break;
        case "Indian Institute of Technology Jodhpur" : 
            for (const i in IITJO) {
                branch.add(new Option(IITJO[i]));
            } 
            break;
        case "Indian Institute of Technology Gandhinagar" : 
            for (const i in IITGA) {
                branch.add(new Option(IITGA[i]));
            } 
            break;
        case "Indian Institute of Technology Indore" : 
            for (const i in IITI) {
                branch.add(new Option(IITI[i]));
            } 
            break;
        case "Indian Institute of Technology Jammu" : 
            for (const i in Jam) {
                branch.add(new Option(Jam[i]));
            } 
            break;
        case "Indian Institute of Technology Tirupati" : 
            for (const i in Tiru) {
                branch.add(new Option(Tiru[i]));
            } 
            break;
        case "Indian Institute of Technology Palakkad" : 
            for (const i in Pal) {
                branch.add(new Option(Pal[i]));
            } 
            break;
        case "Indian Institute of Technology Dharwad" : 
            for (const i in IITDH) {
                branch.add(new Option(IITDH[i]));
            } 
            break;
        case "Indian Institute of Technology Bhilai" : 
            for (const i in IITBhi) {
                branch.add(new Option(IITBhi[i]));
            } 
            break;
        case "Indian Institute of Technology Goa" : 
            for (const i in IITGoa) {
                branch.add(new Option(IITGoa[i]));
            } 
            break;
        case "Indian Institute of Technology Bhubaneswar" : 
            for (const i in IIT) {
                branch.add(new Option(IIT[i]));
            } 
            break;
    }
}
