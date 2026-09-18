import{$a as D,Ba as B,Bb as U,Ma as c,Na as p,Oa as S,Q as F,Qa as g,R,Ra as C,W as H,Wa as n,Xa as e,Ya as x,ab as w,cb as O,db as r,ec as V,jb as M,la as $,lb as i,mb as l,nb as v,ob as k,pa as a}from"./chunk-PCNEIDV7.js";var K={CB12:"CASIER BOUTEILLE 12",CB24:"CASIER BOUTEILLE 24",CB12M:"CASIER BOUTEILLE 12 (METAL)",CB24M:"CASIER BOUTEILLE 24 (METAL)",CV12:"CASIER VERRE 12",CV24:"CASIER VERRE 24",CBG12:"CASIER BOUTEILLE GUINNESS 12",CBG15:"CASIER BOUTEILLE GUINNESS 15",CBG24:"CASIER BOUTEILLE GUINNESS 24",CVG12:"CASIER VERRE GUINNESS 12",CVG15:"CASIER VERRE GUINNESS 15",CVG24:"CASIER VERRE GUINNESS 24",VIP12:"VIP 12",VIP24:"VIP 24",VCP12:"VCP 12",VCP24:"VCP 24",VIPG12:"VIP GUINNESS 12",VIPG15:"VIP GUINNESS 15",VIPG24:"VIP GUINNESS 24",EGUI12:"EMBALLAGE GUINNESS 12",EGUI15:"EMBALLAGE GUINNESS 15",EGUI24:"EMBALLAGE GUINNESS 24",PP:"PALETTE PLASTIQUE",PB:"PALETTE BOIS",TT:"TONNELET",BPM:"BOUTEILLE PET METAL",BGM:"BOUTEILLE GUINNESS METAL",CAIMET:"CAISSE METALLIQUE",CONS001:"CONSIGNE DIVERSE",INPN33:"EMBALLAGE INPN 33",EMB1:"EMBALLAGE 1",EMB2:"EMBALLAGE 2",EMB3:"EMBALLAGE 3",EMB4:"EMBALLAGE 4",EMB5:"EMBALLAGE 5",CAISMB:"CAISSE METAL BOUTEILLE","PALT-V":"PALETTE VERRE",PALTPL:"PALETTE PLASTIQUE (PL)",PRC01:"PORTE-CASIER 01",ELV01:"ELEVATEUR 01"},z=new Set(Object.keys(K));var j=()=>[],G=(o,s)=>s.value;function Z(o,s){if(o&1){let t=D();n(0,"button",15),O("click",function(){let m=F(t).$implicit,E=r(2);return R(E.setFormat(m.value))}),n(1,"span",4),i(2),e(),i(3),e()}if(o&2){let t=s.$implicit,d=r(2);M("active",d.format===t.value),a(2),l(t.icon),a(),v(" ",t.label," ")}}function J(o,s){if(o&1&&(n(0,"div",6),g(1,Z,4,4,"button",14,G),e()),o&2){let t=r();a(),C(t.FORMATS)}}function X(o,s){if(o&1){let t=D();n(0,"button",15),O("click",function(){F(t);let m=r().$implicit,E=r(2);return R(E.setFormat(m.value))}),n(1,"span",4),i(2),e(),i(3),e()}if(o&2){let t=r().$implicit,d=r(2);M("active",d.format===t.value),a(2),l(t.icon),a(),v(" ",t.label," ")}}function tt(o,s){if(o&1&&c(0,X,4,4,"button",14),o&2){let t=s.$implicit;p(t.value!=="ticket"?0:-1)}}function et(o,s){if(o&1&&(n(0,"div",6),g(1,tt,1,1,null,null,G),e()),o&2){let t=r();a(),C(t.FORMATS)}}function nt(o,s){if(o&1&&x(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,$)}}function it(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function at(o,s){if(o&1&&(n(0,"div",28),i(1),e()),o&2){let t=r(2);a(),v("Entrep\xF4t : ",t.invoice==null?null:t.invoice.warehouseName)}}function ot(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.invoice==null?null:t.invoice.dateEcheance))}}function dt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Commande"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice==null?null:t.invoice.salesOrderName)}}function lt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice.notes)}}function st(o,s){if(o&1&&(n(0,"tr")(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",50),i(10),e(),n(11,"td",35),i(12),e(),n(13,"td",51),i(14),e(),n(15,"td",33),i(16),e(),n(17,"td",52),i(18),e()()),o&2){let t=s.$implicit,d=r(2);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(2),l(d.fmt(t.prixUnitaire)),a(2),l(d.fmt(t.prixUnitaireTTC??0)),a(2),l((t.rabaisUnitaire??0)>0?"\u2013"+d.fmt(t.rabaisUnitaire):"\u2014"),a(2),l((t.rabaisUnitaireTTC??0)>0?"\u2013"+d.fmt(t.rabaisUnitaireTTC):"\u2014"),a(2),l(d.fmt(t.montantHT)),a(2),l(d.fmt(t.montantTTC))}}function rt(o,s){if(o&1&&(n(0,"tr",55)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),x(7,"td",56)(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(4),l(d.fmt(t.montantTTC))}}function mt(o,s){if(o&1&&(n(0,"tr",53)(1,"td",54),i(2,"CONSIGNES"),e()(),g(3,rt,11,4,"tr",55,S)),o&2){let t=r(2);a(3),C(t.consigneLines)}}function ct(o,s){if(o&1&&(n(0,"tr",55)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),x(7,"td",56)(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(4),l(d.fmt(t.montantTTC))}}function pt(o,s){if(o&1&&(n(0,"tr",57)(1,"td",54),i(2,"D\xC9CONSIGNES"),e()(),g(3,ct,11,4,"tr",55,S)),o&2){let t=r(2);a(3),C(t.deconsigneLines)}}function vt(o,s){if(o&1&&(n(0,"tr",58)(1,"td",59),i(2),e(),n(3,"td",33),i(4),e(),n(5,"td",33),i(6),e(),x(7,"td")(8,"td")(9,"td"),n(10,"td",33),i(11),e(),n(12,"td",33),i(13),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.categoryName),a(2),l(d.fmt(t.quantite)),a(2),l(d.fmt(t.montantUnitaire)),a(5),l(d.fmt(t.montantTotal)),a(2),l(d.fmt(t.montantTotal))}}function Et(o,s){if(o&1&&(n(0,"tr",53)(1,"td",54),i(2,"RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)"),e()(),g(3,vt,14,5,"tr",58,S)),o&2){let t=r(2);a(3),C(t.invoice==null?null:t.invoice.ristourneDetails)}}function xt(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Pr\xE9compte (PSA)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice.totalPrecompte)," F")}}function ut(o,s){if(o&1&&(n(0,"div",39)(1,"span"),i(2,"Frais d'enl\xE8vement"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("+ ",t.fmt(t.invoice==null?null:t.invoice.fraisEnlevementTTC)," F")}}function ht(o,s){if(o&1&&(n(0,"div",41)(1,"span"),i(2,"Ristournes (\xE0 r\xE9cup\xE9rer)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.totalRistourne)," F")}}function _t(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Rabais HT"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabais)," F")}}function ft(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Rabais TTC d\xE9duit"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabaisTTC)," F")}}function gt(o,s){if(o&1&&(n(0,"div",43)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.montantPaye)," F")}}function Ct(o,s){if(o&1&&(n(0,"div",44)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.montantDu)," F")}}function Tt(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,nt,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,it,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"CLIENT"),e(),n(16,"div",27),i(17),e(),c(18,at,2,1,"div",28),e(),n(19,"div",29)(20,"div",30)(21,"span"),i(22,"Date"),e(),n(23,"span"),i(24),e()(),c(25,ot,5,1,"div",30),c(26,dt,5,1,"div",30),c(27,lt,5,1,"div",30),e()(),n(28,"table",31)(29,"thead")(30,"tr")(31,"th"),i(32,"Code"),e(),n(33,"th",32),i(34,"D\xE9signation"),e(),n(35,"th",33),i(36,"Qt\xE9"),e(),n(37,"th",33),i(38,"P.U.HT"),e(),n(39,"th",33),i(40,"P.U.TTC"),e(),n(41,"th",33),i(42,"Rabais HT/u"),e(),n(43,"th",33),i(44,"Rabais TTC/u"),e(),n(45,"th",33),i(46,"Mnt HT"),e(),n(47,"th",33),i(48,"Mnt TTC"),e()()(),n(49,"tbody"),g(50,st,19,9,"tr",null,S),c(52,mt,5,0),c(53,pt,5,0),c(54,Et,5,0),e()(),n(55,"table",34)(56,"thead")(57,"tr")(58,"th"),i(59,"Total Colis"),e(),n(60,"th"),i(61,"Total PET"),e(),n(62,"th"),i(63,"Total Casier"),e(),n(64,"th"),i(65,"Liq. Nu"),e(),n(66,"th"),i(67,"Consigne (F)"),e(),n(68,"th"),i(69,"D\xE9consigne (F)"),e(),n(70,"th"),i(71,"Qt\xE9 Csgn"),e(),n(72,"th"),i(73,"Qt\xE9 Dcsgn"),e()()(),n(74,"tbody")(75,"tr")(76,"td",33),i(77),e(),n(78,"td",33),i(79),e(),n(80,"td",33),i(81),e(),n(82,"td",33),i(83),e(),n(84,"td",33),i(85),e(),n(86,"td",35),i(87),e(),n(88,"td",33),i(89),e(),n(90,"td",35),i(91),e()()()(),n(92,"div",36)(93,"div",37)(94,"div",38)(95,"span"),i(96,"Total HT"),e(),n(97,"span"),i(98),e()(),n(99,"div",38)(100,"span"),i(101,"TVA (19,25%)"),e(),n(102,"span"),i(103),e()(),c(104,xt,5,1,"div",38),c(105,ut,5,1,"div",39),n(106,"div",40)(107,"span"),i(108,"Total TTC"),e(),n(109,"span"),i(110),e()(),c(111,ht,5,1,"div",41),c(112,_t,5,1,"div",38),c(113,ft,5,1,"div",38),n(114,"div",42)(115,"span"),i(116,"NET \xC0 PAYER"),e(),n(117,"span"),i(118),e()(),c(119,gt,5,1,"div",43),c(120,Ct,5,1,"div",44),e()(),n(121,"div",45),i(122," Arr\xEAt\xE9 \xE0 la somme de : "),n(123,"strong"),i(124),e()(),n(125,"div",46)(126,"div",47)(127,"div",48),i(128,"Signature du livreur"),e(),x(129,"div",49),e(),n(130,"div",47)(131,"div",48),i(132,"Cachet et signature du client"),e(),x(133,"div",49),e()()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(3),l(t.docTitle),a(2),l(t.invoice==null?null:t.invoice.name),a(6),l(t.invoice==null?null:t.invoice.partnerName),a(),p(t.invoice!=null&&t.invoice.warehouseName?18:-1),a(6),l(t.fmtDate(t.invoice==null?null:t.invoice.date)),a(),p(t.invoice!=null&&t.invoice.dateEcheance?25:-1),a(),p(t.invoice!=null&&t.invoice.salesOrderName?26:-1),a(),p(t.invoice!=null&&t.invoice.notes?27:-1),a(23),C(t.salesLines),a(2),p(t.consigneLines.length?52:-1),a(),p(t.deconsigneLines.length?53:-1),a(),p(!(t.invoice==null||t.invoice.ristourneDetails==null)&&t.invoice.ristourneDetails.length?54:-1),a(23),l(t.fmt(t.totalColis)),a(2),l(t.fmt(t.totalPET)),a(2),l(t.fmt(t.totalCasier)),a(2),l(t.fmt((t.invoice==null?null:t.invoice.totalLiquideNu)??0)),a(2),l(t.fmt(t.consigneMontant)),a(2),v("\u2013 ",t.fmt(t.deconsigneMontant)),a(2),l(t.fmt(t.qteConsigne)),a(2),v("\u2013 ",t.fmt(t.qteDeconsigne)),a(7),v("",t.fmt(t.invoice==null?null:t.invoice.totalHT)," F"),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTVA)," F"),a(),p(t.invoice!=null&&t.invoice.totalPrecompte?104:-1),a(),p(((t.invoice==null?null:t.invoice.fraisEnlevementTTC)??0)>0?105:-1),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTTC)," F"),a(),p(((t.invoice==null?null:t.invoice.totalRistourne)??0)>0?111:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabais)??0)>0?112:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabaisTTC)??0)>0?113:-1),a(5),v("",t.fmt((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))," F"),a(),p(t.invoice!=null&&t.invoice.montantPaye?119:-1),a(),p(t.invoice!=null&&t.invoice.montantDu?120:-1),a(4),l(t.montantEnLettres((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC)))}}function St(o,s){if(o&1&&(n(0,"div",60),x(1,"img",77),e()),o&2){let t=r(2);a(),w("src",t.companyLogoUrl,$)}}function bt(o,s){if(o&1&&(n(0,"div",62),i(1),e()),o&2){let t=r(2);a(),l(t.companyPhone)}}function Pt(o,s){if(o&1&&(n(0,"div",66)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice.notes)}}function It(o,s){if(o&1&&(n(0,"div",78),i(1),e(),n(2,"div",79)(3,"span"),i(4),e(),n(5,"span",80),i(6),e()()),o&2){let t=s.$implicit,d=r(2);a(),l(t.productCode||t.description),a(3),k("",d.fmt(t.quantity)," \xD7 ",d.fmt(t.prixUnitaireTTC??t.prixUnitaire)),a(2),v("",d.fmt(t.montantTTC)," F")}}function yt(o,s){if(o&1&&(n(0,"div",78),i(1),e(),n(2,"div",79)(3,"span"),i(4),e(),n(5,"span"),i(6),e()()),o&2){let t=s.$implicit,d=r(3);a(),l(t.productCode||t.description),a(3),l(d.fmt(t.quantity)),a(2),v("",d.fmt(t.montantTTC)," F")}}function wt(o,s){if(o&1&&(n(0,"div",81),i(1,"\u2014 Consignes \u2014"),e(),g(2,yt,7,3,null,null,S)),o&2){let t=r(2);a(2),C(t.consigneLines)}}function $t(o,s){if(o&1&&(n(0,"div",78),i(1),e(),n(2,"div",79)(3,"span"),i(4),e(),n(5,"span"),i(6),e()()),o&2){let t=s.$implicit,d=r(3);a(),l(t.productCode||t.description),a(3),l(d.fmt(t.quantity)),a(2),v("-",d.fmt(t.montantTTC)," F")}}function Ot(o,s){if(o&1&&(n(0,"div",81),i(1,"\u2014 D\xE9consignes \u2014"),e(),g(2,$t,7,3,null,null,S)),o&2){let t=r(2);a(2),C(t.deconsigneLines)}}function Mt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Total PET"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmt(t.totalPET))}}function Nt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Total Casier"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmt(t.totalCasier))}}function Lt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Liq. Nu"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.totalLiquideNu)," F")}}function kt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Consigne"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.consigneMontant)," F")}}function At(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"D\xE9consigne"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.deconsigneMontant)," F")}}function Ft(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"PSA"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice.totalPrecompte)," F")}}function Rt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Frais enl\xE8v."),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("+ ",t.fmt(t.invoice==null?null:t.invoice.fraisEnlevementTTC)," F")}}function Dt(o,s){if(o&1&&(x(0,"div",82),n(1,"div",83),i(2,"RISTOURNES (\xE0 r\xE9cup\xE9rer)"),e(),n(3,"div",84)(4,"span"),i(5,"Total ristournes"),e(),n(6,"span"),i(7),e()(),x(8,"div",82)),o&2){let t=r(2);a(7),v("",t.fmt(t.invoice==null?null:t.invoice.totalRistourne)," F")}}function Ut(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Rabais HT"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabais)," F")}}function zt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Rabais TTC"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabaisTTC)," F")}}function Ht(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice.montantPaye)," F")}}function Bt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.montantDu)," F")}}function Vt(o,s){if(o&1&&(n(0,"div",67)(1,"span"),i(2,"Agent"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice.createdBy)}}function qt(o,s){if(o&1&&(n(0,"div",10),c(1,St,2,1,"div",60),n(2,"div",61),i(3),e(),c(4,bt,2,1,"div",62),x(5,"div",63),n(6,"div",64),i(7),e(),n(8,"div",65),i(9),e(),x(10,"div",63),n(11,"div",66)(12,"span"),i(13,"Date"),e(),n(14,"span"),i(15),e()(),n(16,"div",66)(17,"span"),i(18,"Client"),e(),n(19,"span"),i(20),e()(),c(21,Pt,5,1,"div",66),x(22,"div",63),g(23,It,7,4,null,null,S),c(25,wt,4,0),c(26,Ot,4,0),x(27,"div",63),n(28,"div",67)(29,"span"),i(30,"Total Colis"),e(),n(31,"span"),i(32),e()(),c(33,Mt,5,1,"div",67),c(34,Nt,5,1,"div",67),c(35,Lt,5,1,"div",67),c(36,kt,5,1,"div",67),c(37,At,5,1,"div",67),x(38,"div",63),n(39,"div",67)(40,"span"),i(41,"Total HT"),e(),n(42,"span"),i(43),e()(),n(44,"div",67)(45,"span"),i(46,"TVA 19,25%"),e(),n(47,"span"),i(48),e()(),c(49,Ft,5,1,"div",67),c(50,Rt,5,1,"div",67),n(51,"div",68)(52,"span"),i(53,"Total TTC"),e(),n(54,"span"),i(55),e()(),c(56,Dt,9,1),c(57,Ut,5,1,"div",67),c(58,zt,5,1,"div",67),x(59,"div",63),n(60,"div",69)(61,"span"),i(62,"NET \xC0 PAYER"),e(),n(63,"span"),i(64),e()(),c(65,Ht,5,1,"div",67),c(66,Bt,5,1,"div",67),x(67,"div",63),n(68,"div",70),i(69),e(),n(70,"div",71),i(71,"Merci de votre confiance !"),e(),c(72,Vt,5,1,"div",67),x(73,"div",63),n(74,"div",72)(75,"div",73),i(76,"Signature du livreur"),e(),n(77,"div",74),i(78,"Nom : ___________________________"),e(),x(79,"div",75),e(),n(80,"div",76)(81,"div",73),i(82,"Cachet & signature client"),e(),n(83,"div",74),i(84,"Nom : ___________________________"),e(),x(85,"div",75),e()()),o&2){let t=r();a(),p(t.companyLogoUrl?1:-1),a(2),l(t.companyName),a(),p(t.companyPhone?4:-1),a(3),l(t.docTitle),a(2),l(t.invoice==null?null:t.invoice.name),a(6),l(t.fmtDate(t.invoice==null?null:t.invoice.date)),a(5),l(t.invoice==null?null:t.invoice.partnerName),a(),p(t.invoice!=null&&t.invoice.notes?21:-1),a(2),C(t.salesLines),a(2),p(t.consigneLines.length?25:-1),a(),p(t.deconsigneLines.length?26:-1),a(6),l(t.fmt(t.totalColis)),a(),p(t.totalPET>0?33:-1),a(),p(t.totalCasier>0?34:-1),a(),p(((t.invoice==null?null:t.invoice.totalLiquideNu)??0)>0?35:-1),a(),p(t.consigneMontant>0?36:-1),a(),p(t.deconsigneMontant>0?37:-1),a(6),v("",t.fmt(t.invoice==null?null:t.invoice.totalHT)," F"),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTVA)," F"),a(),p(t.invoice!=null&&t.invoice.totalPrecompte?49:-1),a(),p(((t.invoice==null?null:t.invoice.fraisEnlevementTTC)??0)>0?50:-1),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTTC)," F"),a(),p(((t.invoice==null?null:t.invoice.totalRistourne)??0)>0?56:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabais)??0)>0?57:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabaisTTC)??0)>0?58:-1),a(6),v("",t.fmt((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))," F"),a(),p(t.invoice!=null&&t.invoice.montantPaye?65:-1),a(),p(((t.invoice==null?null:t.invoice.montantDu)??0)>0?66:-1),a(3),l(t.montantEnLettres((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))),a(3),p(t.invoice!=null&&t.invoice.createdBy?72:-1)}}function jt(o,s){if(o&1&&x(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,$)}}function Gt(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function Qt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Origine"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.picking==null?null:t.picking.origin)}}function Yt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.picking==null?null:t.picking.notes)}}function Wt(o,s){if(o&1&&(n(0,"tr")(1,"td",89),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",52),i(10),e(),n(11,"td"),i(12),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.productName),a(2),l(m.fmt(t.qtyDemanded)),a(2),l(m.fmt(t.qtyDone??t.qtyDemanded)),a(2),l(t.uomName)}}function Kt(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,jt,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,Gt,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9,"BON DE LIVRAISON"),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"CLIENT / DESTINATAIRE"),e(),n(16,"div",27),i(17),e()(),n(18,"div",29)(19,"div",30)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),c(24,Qt,5,1,"div",30),c(25,Yt,5,1,"div",30),e()(),n(26,"table",31)(27,"thead")(28,"tr")(29,"th",33),i(30,"#"),e(),n(31,"th"),i(32,"Code"),e(),n(33,"th",32),i(34,"D\xE9signation"),e(),n(35,"th",33),i(36,"Qt\xE9 dem."),e(),n(37,"th",33),i(38,"Qt\xE9 livr\xE9e"),e(),n(39,"th"),i(40,"U.M."),e()()(),n(41,"tbody"),g(42,Wt,13,6,"tr",null,S),e(),n(44,"tfoot")(45,"tr")(46,"td",85),i(47,"TOTAL COLIS LIVR\xC9S"),e(),n(48,"td",86),i(49),e(),x(50,"td"),e()()(),n(51,"div",46)(52,"div",47)(53,"div",48),i(54,"Signature du livreur"),e(),n(55,"div",87),i(56,"Nom : ________________________"),e(),x(57,"div",49),e(),n(58,"div",47)(59,"div",48),i(60,"Cachet et signature du client"),e(),n(61,"div",87),i(62,"Nom : ________________________"),e(),x(63,"div",49),e()(),n(64,"div",88),i(65),e()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(5),l(t.picking==null?null:t.picking.name),a(6),l((t.picking==null?null:t.picking.partnerName)||"\u2014"),a(6),l(t.fmtDate(t.picking==null?null:t.picking.scheduledDate)),a(),p(t.picking!=null&&t.picking.origin?24:-1),a(),p(t.picking!=null&&t.picking.notes?25:-1),a(17),C(t.pickingMoves),a(7),l(t.fmt(t.totalPickingQty)),a(16),v("Document non contractuel \xB7 ",t.companyName)}}function Zt(o,s){if(o&1&&x(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,$)}}function Jt(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function Xt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.dateEcheance))}}function te(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Commande"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseInvoice==null?null:t.purchaseInvoice.purchaseOrderName)}}function ee(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"R\xE9f."),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseInvoice.notes)}}function ne(o,s){if(o&1&&(n(0,"tr")(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",50),i(10),e(),n(11,"td",35),i(12),e(),n(13,"td",51),i(14),e(),n(15,"td",33),i(16),e(),n(17,"td",52),i(18),e()()),o&2){let t=s.$implicit,d=r(2);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(2),l(d.fmt(t.prixUnitaire+(t.rabaisUnitaire??0))),a(2),l(d.fmt((t.prixUnitaire+(t.rabaisUnitaire??0))*(1+(t.tauxTVA??0)/100))),a(2),l((t.rabaisUnitaire??0)>0?"\u2013"+d.fmt(t.rabaisUnitaire):"\u2014"),a(2),l((t.rabaisUnitaire??0)>0?"\u2013"+d.fmt((t.rabaisUnitaire??0)*(1+(t.tauxTVA??0)/100)):"\u2014"),a(2),l(d.fmt(t.montantHT)),a(2),l(d.fmt((t.montantHT??0)+(t.montantTVA??0)+(t.precompte??0)))}}function ie(o,s){if(o&1&&(n(0,"tr",55)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),x(7,"td",56)(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(4),l(d.fmt(t.montantTTC))}}function ae(o,s){if(o&1&&(n(0,"tr",53)(1,"td",54),i(2,"CONSIGNES"),e()(),g(3,ie,11,4,"tr",55,S)),o&2){let t=r(2);a(3),C(t.purchaseConsigneLines)}}function oe(o,s){if(o&1&&(n(0,"tr",55)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),x(7,"td",56)(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(4),l(d.fmt(t.montantTTC))}}function de(o,s){if(o&1&&(n(0,"tr",57)(1,"td",54),i(2,"D\xC9CONSIGNES"),e()(),g(3,oe,11,4,"tr",55,S)),o&2){let t=r(2);a(3),C(t.purchaseDeconsigneLines)}}function le(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Pr\xE9compte (PSA)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalPrecompte)," F")}}function se(o,s){if(o&1&&(n(0,"div",39)(1,"span"),i(2,"Frais d'enl\xE8vement"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("+ ",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.fraisEnlevementTTC)," F")}}function re(o,s){if(o&1&&(n(0,"div",41)(1,"span"),i(2,"Rabais HT (601901)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.purchaseTotalRabaisHT)," F")}}function me(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Rabais TTC d\xE9duit"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.purchaseTotalRabaisTTC)," F")}}function ce(o,s){if(o&1&&(n(0,"div",43)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.montantPaye)," F")}}function pe(o,s){if(o&1&&(n(0,"div",44)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.montantDu)," F")}}function ve(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,Zt,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,Jt,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"FOURNISSEUR"),e(),n(16,"div",27),i(17),e()(),n(18,"div",29)(19,"div",30)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),c(24,Xt,5,1,"div",30),c(25,te,5,1,"div",30),c(26,ee,5,1,"div",30),e()(),n(27,"table",31)(28,"thead")(29,"tr")(30,"th"),i(31,"Code"),e(),n(32,"th",32),i(33,"D\xE9signation"),e(),n(34,"th",33),i(35,"Qt\xE9"),e(),n(36,"th",33),i(37,"P.U.HT"),e(),n(38,"th",33),i(39,"P.U.TTC"),e(),n(40,"th",33),i(41,"Rabais HT/u"),e(),n(42,"th",33),i(43,"Rabais TTC/u"),e(),n(44,"th",33),i(45,"Mnt HT"),e(),n(46,"th",33),i(47,"Mnt TTC"),e()()(),n(48,"tbody"),g(49,ne,19,9,"tr",null,S),c(51,ae,5,0),c(52,de,5,0),e()(),n(53,"table",34)(54,"thead")(55,"tr")(56,"th"),i(57,"Total Colis"),e(),n(58,"th"),i(59,"Total PET"),e(),n(60,"th"),i(61,"Total Casier"),e(),n(62,"th"),i(63,"Liq. Nu"),e(),n(64,"th"),i(65,"Consigne (F)"),e(),n(66,"th"),i(67,"D\xE9consigne (F)"),e(),n(68,"th"),i(69,"Qt\xE9 Csgn"),e(),n(70,"th"),i(71,"Qt\xE9 Dcsgn"),e()()(),n(72,"tbody")(73,"tr")(74,"td",33),i(75),e(),n(76,"td",33),i(77),e(),n(78,"td",33),i(79,"0"),e(),n(80,"td",33),i(81),e(),n(82,"td",33),i(83),e(),n(84,"td",35),i(85),e(),n(86,"td",33),i(87),e(),n(88,"td",35),i(89),e()()()(),n(90,"div",36)(91,"div",37)(92,"div",38)(93,"span"),i(94,"Total HT"),e(),n(95,"span"),i(96),e()(),n(97,"div",38)(98,"span"),i(99,"TVA (19,25%)"),e(),n(100,"span"),i(101),e()(),c(102,le,5,1,"div",38),c(103,se,5,1,"div",39),n(104,"div",40)(105,"span"),i(106,"Total TTC"),e(),n(107,"span"),i(108),e()(),c(109,re,5,1,"div",41),c(110,me,5,1,"div",38),n(111,"div",42)(112,"span"),i(113,"NET \xC0 PAYER"),e(),n(114,"span"),i(115),e()(),c(116,ce,5,1,"div",43),c(117,pe,5,1,"div",44),e()(),n(118,"div",45),i(119," Arr\xEAt\xE9 \xE0 la somme de : "),n(120,"strong"),i(121),e()(),n(122,"div",46)(123,"div",47)(124,"div",48),i(125,"Signature du fournisseur"),e(),x(126,"div",49),e(),n(127,"div",47)(128,"div",48),i(129,"Cachet et signature"),e(),x(130,"div",49),e()()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(3),l(t.docTitle),a(2),l(t.purchaseInvoice==null?null:t.purchaseInvoice.name),a(6),l(t.purchaseInvoice==null?null:t.purchaseInvoice.partnerName),a(6),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.date)),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.dateEcheance?24:-1),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.purchaseOrderName?25:-1),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.notes?26:-1),a(23),C(t.purchaseNormalLines),a(2),p(t.purchaseConsigneLines.length?51:-1),a(),p(t.purchaseDeconsigneLines.length?52:-1),a(23),l(t.fmt(t.purchaseTotalColis)),a(2),l(t.fmt(t.purchaseTotalPET)),a(4),l(t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.totalLiquideNu)??0)),a(2),l(t.fmt(t.purchaseConsigneMontant)),a(2),v("\u2013 ",t.fmt(t.purchaseDeconsigneMontant)),a(2),l(t.fmt(t.purchaseQteConsigne)),a(2),v("\u2013 ",t.fmt(t.purchaseQteDeconsigne)),a(7),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalHT)," F"),a(5),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTVA)," F"),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.totalPrecompte?102:-1),a(),p(((t.purchaseInvoice==null?null:t.purchaseInvoice.fraisEnlevementTTC)??0)>0?103:-1),a(5),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)," F"),a(),p(t.purchaseTotalRabaisHT>0?109:-1),a(),p(t.purchaseTotalRabaisTTC>0?110:-1),a(5),v("",t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC))," F"),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.montantPaye?116:-1),a(),p(((t.purchaseInvoice==null?null:t.purchaseInvoice.montantDu)??0)>.01?117:-1),a(4),l(t.montantEnLettres((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)))}}function Ee(o,s){if(o&1&&(n(0,"div",60),x(1,"img",77),e()),o&2){let t=r(2);a(),w("src",t.companyLogoUrl,$)}}function xe(o,s){if(o&1&&(n(0,"div",62),i(1),e()),o&2){let t=r(2);a(),l(t.companyPhone)}}function ue(o,s){if(o&1&&(n(0,"div",78),i(1),e(),n(2,"div",79)(3,"span"),i(4),e(),n(5,"span",80),i(6),e()()),o&2){let t=s.$implicit,d=r(2);a(),l(t.description||t.productCode),a(3),k("",d.fmt(t.quantity)," \xD7 ",d.fmt(t.prixUnitaire)),a(2),v("",d.fmt(t.montantTTC)," F")}}function he(o,s){if(o&1&&(n(0,"div",10),c(1,Ee,2,1,"div",60),n(2,"div",61),i(3),e(),c(4,xe,2,1,"div",62),x(5,"div",63),n(6,"div",64),i(7),e(),n(8,"div",65),i(9),e(),x(10,"div",63),n(11,"div",66)(12,"span"),i(13,"Date"),e(),n(14,"span"),i(15),e()(),n(16,"div",66)(17,"span"),i(18,"Fournisseur"),e(),n(19,"span"),i(20),e()(),x(21,"div",63),g(22,ue,7,4,null,null,S),x(24,"div",63),n(25,"div",67)(26,"span"),i(27,"Total HT"),e(),n(28,"span"),i(29),e()(),n(30,"div",67)(31,"span"),i(32,"TVA"),e(),n(33,"span"),i(34),e()(),x(35,"div",63),n(36,"div",69)(37,"span"),i(38,"NET \xC0 PAYER"),e(),n(39,"span"),i(40),e()(),x(41,"div",63),n(42,"div",70),i(43),e()()),o&2){let t=r();a(),p(t.companyLogoUrl?1:-1),a(2),l(t.companyName),a(),p(t.companyPhone?4:-1),a(3),l(t.docTitle),a(2),l(t.purchaseInvoice==null?null:t.purchaseInvoice.name),a(6),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.date)),a(5),l(t.purchaseInvoice==null?null:t.purchaseInvoice.partnerName),a(2),C(t.purchaseInvoiceLines),a(7),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalHT)," F"),a(5),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTVA)," F"),a(6),v("",t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC))," F"),a(3),l(t.montantEnLettres((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)))}}function _e(o,s){if(o&1&&x(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,$)}}function fe(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function ge(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Livraison pr\xE9vue"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.dateExpected))}}function Ce(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseOrder==null?null:t.purchaseOrder.notes)}}function Te(o,s){if(o&1&&(n(0,"tr")(1,"td",89),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",33),i(10),e(),n(11,"td",33),i(12),e(),n(13,"td",33),i(14),e(),n(15,"td",52),i(16),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.description),a(2),l(m.fmt(t.quantity)),a(2),l(m.fmt(t.prixUnitaire)),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(m.fmt(t.montantHT)),a(2),l(m.fmt(t.montantTTC))}}function Se(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,_e,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,fe,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9,"BON DE COMMANDE"),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"FOURNISSEUR"),e(),n(16,"div",27),i(17),e()(),n(18,"div",29)(19,"div",30)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),c(24,ge,5,1,"div",30),c(25,Ce,5,1,"div",30),e()(),n(26,"table",31)(27,"thead")(28,"tr")(29,"th",33),i(30,"#"),e(),n(31,"th"),i(32,"Code"),e(),n(33,"th",32),i(34,"D\xE9signation"),e(),n(35,"th",33),i(36,"Qt\xE9"),e(),n(37,"th",33),i(38,"P.U. HT"),e(),n(39,"th",33),i(40,"TVA"),e(),n(41,"th",33),i(42,"Total HT"),e(),n(43,"th",33),i(44,"Total TTC"),e()()(),n(45,"tbody"),g(46,Te,17,8,"tr",null,S),e()(),n(48,"div",36)(49,"div",37)(50,"div",38)(51,"span"),i(52,"Total HT"),e(),n(53,"span"),i(54),e()(),n(55,"div",38)(56,"span"),i(57,"Taxes (TVA + PSA)"),e(),n(58,"span"),i(59),e()(),n(60,"div",42)(61,"span"),i(62,"TOTAL TTC"),e(),n(63,"span"),i(64),e()()()(),n(65,"div",45),i(66," Arr\xEAt\xE9 \xE0 la somme de : "),n(67,"strong"),i(68),e()(),n(69,"div",46)(70,"div",47)(71,"div",48),i(72,"Le fournisseur"),e(),n(73,"div",87),i(74,"Nom : ________________________"),e(),x(75,"div",49),e(),n(76,"div",47)(77,"div",48),i(78,"Pour la soci\xE9t\xE9"),e(),n(79,"div",87),i(80,"Nom : ________________________"),e(),x(81,"div",49),e()(),n(82,"div",88),i(83),e()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(5),l(t.purchaseOrder==null?null:t.purchaseOrder.name),a(6),l((t.purchaseOrder==null?null:t.purchaseOrder.partnerName)||"\u2014"),a(6),l(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.date)),a(),p(t.purchaseOrder!=null&&t.purchaseOrder.dateExpected?24:-1),a(),p(t.purchaseOrder!=null&&t.purchaseOrder.notes?25:-1),a(21),C((t.purchaseOrder==null?null:t.purchaseOrder.lines)??U(13,j)),a(8),v("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalHT)," F"),a(5),v("",t.fmt(((t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)??0)-((t.purchaseOrder==null?null:t.purchaseOrder.totalHT)??0))," F"),a(5),v("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)," F"),a(4),l(t.montantEnLettres(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)),a(15),v("Bon de commande soumis \xE0 acceptation \xB7 ",t.companyName)}}function be(o,s){if(o&1&&x(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,$)}}function Pe(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function Ie(o,s){if(o&1&&(n(0,"div",28),i(1),e()),o&2){let t=r(2);a(),l(t.salesOrder==null?null:t.salesOrder.warehouseName)}}function ye(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.salesOrder==null?null:t.salesOrder.dateEcheance))}}function we(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Facture"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.salesOrder==null?null:t.salesOrder.invoiceName)}}function $e(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.salesOrder==null?null:t.salesOrder.notes)}}function Oe(o,s){if(o&1&&(n(0,"tr")(1,"td",89),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",33),i(10),e(),n(11,"td",33),i(12),e(),n(13,"td",33),i(14),e(),n(15,"td",33),i(16),e(),n(17,"td",52),i(18),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.description),a(2),l(m.fmt(t.quantity)),a(2),l(m.fmt(t.prixUnitaire)),a(2),l(t.tauxRemise?t.tauxRemise+"%":"\u2014"),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(m.fmt(t.montantHT)),a(2),l(m.fmt(t.montantTTC))}}function Me(o,s){if(o&1&&(n(0,"div",90)(1,"span"),i(2,"Remise totale"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.salesOrder==null?null:t.salesOrder.totalRemise)," F")}}function Ne(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,be,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,Pe,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9,"BON DE COMMANDE"),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"CLIENT"),e(),n(16,"div",27),i(17),e(),c(18,Ie,2,1,"div",28),e(),n(19,"div",29)(20,"div",30)(21,"span"),i(22,"Date"),e(),n(23,"span"),i(24),e()(),c(25,ye,5,1,"div",30),c(26,we,5,1,"div",30),c(27,$e,5,1,"div",30),e()(),n(28,"table",31)(29,"thead")(30,"tr")(31,"th",33),i(32,"#"),e(),n(33,"th"),i(34,"Code"),e(),n(35,"th",32),i(36,"D\xE9signation"),e(),n(37,"th",33),i(38,"Qt\xE9"),e(),n(39,"th",33),i(40,"P.U. HT"),e(),n(41,"th",33),i(42,"Remise"),e(),n(43,"th",33),i(44,"TVA"),e(),n(45,"th",33),i(46,"Mnt HT"),e(),n(47,"th",33),i(48,"Mnt TTC"),e()()(),n(49,"tbody"),g(50,Oe,19,9,"tr",null,S),e()(),n(52,"div",36)(53,"div",37),c(54,Me,5,1,"div",90),n(55,"div",38)(56,"span"),i(57,"Total HT"),e(),n(58,"span"),i(59),e()(),n(60,"div",38)(61,"span"),i(62,"TVA (19,25%)"),e(),n(63,"span"),i(64),e()(),n(65,"div",42)(66,"span"),i(67,"TOTAL TTC"),e(),n(68,"span"),i(69),e()()()(),n(70,"div",45),i(71," Arr\xEAt\xE9 \xE0 la somme de : "),n(72,"strong"),i(73),e()(),n(74,"div",46)(75,"div",47)(76,"div",48),i(77,"Le client"),e(),n(78,"div",87),i(79,"Nom : ________________________"),e(),x(80,"div",49),e(),n(81,"div",47)(82,"div",48),i(83,"Pour la soci\xE9t\xE9"),e(),n(84,"div",87),i(85,"Nom : ________________________"),e(),x(86,"div",49),e()(),n(87,"div",88),i(88),e()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(5),l(t.salesOrder==null?null:t.salesOrder.name),a(6),l((t.salesOrder==null?null:t.salesOrder.partnerName)||"\u2014"),a(),p(t.salesOrder!=null&&t.salesOrder.warehouseName?18:-1),a(6),l(t.fmtDate(t.salesOrder==null?null:t.salesOrder.date)),a(),p(t.salesOrder!=null&&t.salesOrder.dateEcheance?25:-1),a(),p(t.salesOrder!=null&&t.salesOrder.invoiceName?26:-1),a(),p(t.salesOrder!=null&&t.salesOrder.notes?27:-1),a(23),C((t.salesOrder==null?null:t.salesOrder.lines)??U(16,j)),a(4),p(t.salesOrder!=null&&t.salesOrder.totalRemise?54:-1),a(5),v("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalHT)," F"),a(5),v("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTVA)," F"),a(5),v("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTTC)," F"),a(4),l(t.montantEnLettres(t.salesOrder==null?null:t.salesOrder.totalTTC)),a(15),v("Bon de commande \xB7 ",t.companyName)}}var Be=(()=>{class o{constructor(){this.invoice=null,this.picking=null,this.purchaseInvoice=null,this.purchaseOrder=null,this.salesOrder=null,this.docType="invoice",this.companyName="",this.companyPhone="",this.companyLogoUrl="",this.companyLogoDataUrl="",this.companyInfo=null,this.closed=new H,this.format="a4",this.printing=!1,this.FORMATS=[{value:"a4",label:"A4",icon:"description"},{value:"a5",label:"A5",icon:"article"},{value:"ticket",label:"Ticket",icon:"receipt"}]}get docTitle(){return this.docType==="bon"?"BON DE LIVRAISON":this.docType==="avoir"?"AVOIR":this.docType==="purchase_order"||this.docType==="sales_order"?"BON DE COMMANDE":this.docType==="purchase_invoice"?this.purchaseInvoice?.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR":"FACTURE"}get docRef(){return this.invoice?.name??this.picking?.name??this.purchaseInvoice?.name??this.purchaseOrder?.name??this.salesOrder?.name??""}get client(){return this.invoice?.partnerName??this.picking?.partnerName??this.purchaseInvoice?.partnerName??this.purchaseOrder?.partnerName??this.salesOrder?.partnerName??""}get allLines(){return this.invoice?.lines??[]}get salesLines(){return this.allLines.filter(t=>!this.isConsigneLine(t)&&(t.quantity??0)>=0)}get consigneLines(){return this.allLines.filter(t=>this.isConsigneLine(t)&&(t.quantity??0)>=0)}get deconsigneLines(){return this.allLines.filter(t=>(t.quantity??0)<0)}get pickingMoves(){return this.picking?.moves??[]}get totalPickingQty(){return this.pickingMoves.reduce((t,d)=>t+(d.qtyDone??d.qtyDemanded??0),0)}get purchaseInvoiceLines(){return this.purchaseInvoice?.lines??[]}get purchaseInvoiceHasRabais(){return this.purchaseInvoiceLines.some(t=>(t.rabaisUnitaire??0)>0)}get purchaseNormalLines(){return this.purchaseInvoiceLines.filter(t=>!t.consigne&&(t.quantity??0)>=0)}get purchaseConsigneLines(){return this.purchaseInvoiceLines.filter(t=>t.consigne===!0&&(t.quantity??0)>=0)}get purchaseDeconsigneLines(){return this.purchaseInvoiceLines.filter(t=>(t.quantity??0)<0)}get purchaseTotalColis(){return this.purchaseNormalLines.reduce((t,d)=>t+(d.quantity??0),0)}get purchaseTotalPET(){return this.purchaseNormalLines.filter(t=>t.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((t,d)=>t+(d.quantity??0),0)}get purchaseConsigneMontant(){return this.purchaseConsigneLines.reduce((t,d)=>t+(d.montantTTC??0),0)}get purchaseDeconsigneMontant(){return this.purchaseDeconsigneLines.reduce((t,d)=>t+Math.abs(d.montantTTC??0),0)}get purchaseQteConsigne(){return this.purchaseConsigneLines.reduce((t,d)=>t+(d.quantity??0),0)}get purchaseQteDeconsigne(){return this.purchaseDeconsigneLines.reduce((t,d)=>t+Math.abs(d.quantity??0),0)}get purchaseTotalRabaisHT(){return this.purchaseInvoiceLines.reduce((t,d)=>t+(d.totalRabaisLigne??0),0)}get purchaseTotalRabaisTTC(){return this.purchaseInvoiceLines.reduce((t,d)=>{let m=d.totalRabaisLigne??0;return t+m*(1+(d.tauxTVA??0)/100)},0)}get totalColis(){return this.salesLines.reduce((t,d)=>t+(d.quantity??0),0)}get totalPET(){return this.salesLines.filter(t=>t.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((t,d)=>t+(d.quantity??0),0)}get totalCasier(){return this.salesLines.filter(t=>t.uomName?.toLowerCase().includes("casier")).reduce((t,d)=>t+(d.quantity??0),0)}get consigneMontant(){return this.consigneLines.reduce((t,d)=>t+(d.montantTTC??0),0)}get deconsigneMontant(){return this.deconsigneLines.reduce((t,d)=>t+Math.abs(d.montantTTC??0),0)}get qteConsigne(){return this.consigneLines.reduce((t,d)=>t+(d.quantity??0),0)}get qteDeconsigne(){return this.deconsigneLines.reduce((t,d)=>t+Math.abs(d.quantity??0),0)}isConsigneLine(t){return t.consigne===!0||!!t.productCode&&z.has(t.productCode.trim().toUpperCase())}isConsigne(t){return!!t&&z.has(t.trim().toUpperCase())}fmt(t){return t==null?"0":new Intl.NumberFormat("fr-FR",{maximumFractionDigits:0}).format(t)}fmtDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})}catch(d){return t}}montantEnLettres(t){return Y(Math.round(t??0))+" Francs CFA"}setFormat(t){this.format=t}close(){this.closed.emit()}print(){this.printing=!0;let t=this.buildFullHtml(),d=window.open("","_blank","width=1000,height=1100");if(!d){this.printing=!1;return}d.document.write(t),d.document.close(),d.focus(),setTimeout(()=>{d.print(),d.onafterprint=()=>{d.close(),this.printing=!1}},600)}buildFullHtml(){let t,d;return this.docType==="bon"?(t=Le,d=this.buildBonBody()):this.docType==="purchase_order"?(t=this.format==="a5"?A:N,d=this.buildPurchaseOrderBody()):this.docType==="sales_order"?(t=this.format==="a5"?A:N,d=this.buildSalesOrderBody()):this.docType==="purchase_invoice"?(t=this.format==="ticket"?q:this.format==="a5"?A:N,d=this.format==="ticket"?this.buildPurchaseInvoiceTicketBody():this.buildPurchaseInvoiceBody(this.format==="a5")):(t=this.format==="ticket"?q:this.format==="a5"?A:N,d=this.format==="ticket"?this.buildTicketBody():this.buildInvoiceBody(this.format==="a5")),`<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>${this.docTitle} ${this.docRef}</title>
<style>${t}</style></head><body>${d}</body></html>`}h(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}logoImgHtml(){return this.companyLogoDataUrl?`<img src="${this.companyLogoDataUrl}" class="co-logo" alt="logo">`:this.companyLogoUrl?`<img src="${this.companyLogoUrl.startsWith("http")?this.companyLogoUrl:`${window.location.origin}${this.companyLogoUrl}`}" class="co-logo" alt="logo">`:""}companyHeaderHtml(){let t=this.companyInfo,d=t?.name||this.companyName||"",m=t?.sigle||"",E=t?.rccm||"",f=t?.nif||"",T=t?.adresse||"",_=t?.telephone||this.companyPhone||"",I=t?.email||"",u=m?` <span class="co-sigle">(${this.h(m)})</span>`:"",h=T?`<div class="co-info">${this.h(T)}</div>`:"",b=E?`<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(E)}</div>`:"",P=f?`<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(f)}</div>`:"",y=_?`<div class="co-info"><span class="co-lbl">T\xE9l :</span> ${this.h(_)}</div>`:"",L=I?`<div class="co-info"><span class="co-lbl">Email :</span> ${this.h(I)}</div>`:"";return`${this.logoImgHtml()}
      <div class="co-name">${this.h(d)}${u}</div>
      ${h}${b}${P}${y}${L}`}ticketCompanyHtml(){let t=this.companyInfo,d=t?.name||this.companyName||"",m=t?.sigle||"",E=t?.rccm||"",f=t?.nif||"",T=t?.telephone||this.companyPhone||"",_=t?.email||"",I=this.logoImgHtml();return`
      ${I?`<div class="t-logo">${I}</div>`:""}
      <div class="t-company">${this.h(d)}${m?` (${this.h(m)})`:""}</div>
      ${E?`<div class="t-coinfo">RCCM : ${this.h(E)}</div>`:""}
      ${f?`<div class="t-coinfo">NIF : ${this.h(f)}</div>`:""}
      ${T?`<div class="t-coinfo">T\xE9l : ${this.h(T)}</div>`:""}
      ${_?`<div class="t-coinfo">Email : ${this.h(_)}</div>`:""}`}buildInvoiceBody(t=!1){let d=this.invoice,m=this.docType==="avoir"?"AVOIR":"FACTURE",E=this.salesLines.map(u=>`
      <tr>
        <td>${this.h(u.productCode)}</td>
        <td class="desc">${this.h(u.description)}</td>
        <td class="r">${this.fmt(u.quantity)}</td>
        <td class="r">${this.fmt(u.prixUnitaire)}</td>
        <td class="r bold-teal">${this.fmt(u.prixUnitaireTTC??0)}</td>
        <td class="r rabais">${(u.rabaisUnitaire??0)>0?"\u2013"+this.fmt(u.rabaisUnitaire):"\u2014"}</td>
        <td class="r rabais-ttc">${(u.rabaisUnitaireTTC??0)>0?"\u2013"+this.fmt(u.rabaisUnitaireTTC):"\u2014"}</td>
        <td class="r">${this.fmt(u.montantHT)}</td>
        <td class="r bold">${this.fmt(u.montantTTC)}</td>
      </tr>`).join(""),f=this.consigneLines.length?`
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.consigneLines.map(u=>`
        <tr class="consigne-row">
          <td>${this.h(u.productCode)}</td>
          <td class="desc">${this.h(u.description)}</td>
          <td class="r">${this.fmt(u.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(u.montantTTC)}</td>
        </tr>`).join("")}`:"",T=this.deconsigneLines.length?`
      <tr class="deconsigne-header"><td colspan="9">D\xC9CONSIGNES</td></tr>
      ${this.deconsigneLines.map(u=>`
        <tr class="consigne-row">
          <td>${this.h(u.productCode)}</td>
          <td class="desc">${this.h(u.description)}</td>
          <td class="r">${this.fmt(Math.abs(u.quantity??0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(u.montantTTC)}</td>
        </tr>`).join("")}`:"",_=d.ristourneDetails?.length?`
      <tr class="section-header"><td colspan="9">RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)</td></tr>
      ${d.ristourneDetails.map(u=>`
        <tr class="ristourne-row">
          <td colspan="2">${this.h(u.categoryName)}</td>
          <td class="r">${this.fmt(u.quantite)}</td>
          <td class="r">${this.fmt(u.montantUnitaire)}</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="r">${this.fmt(u.montantTotal)}</td>
          <td class="r">${this.fmt(u.montantTotal)}</td>
        </tr>`).join("")}`:"",I=d.netAPayer??(d.totalTTC??0)+(d.fraisEnlevementTTC??0);return`
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${m}</div>
      <div class="doc-ref">${this.h(d.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT</div>
      <div class="meta-value">${this.h(d.partnerName)}</div>
      ${d.warehouseName?`<div class="meta-sub">Entrep\xF4t : ${this.h(d.warehouseName)}</div>`:""}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(d.date)}</span></div>
      ${d.dateEcheance?`<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(d.dateEcheance)}</span></div>`:""}
      ${d.salesOrderName?`<div class="meta-row"><span class="ml">Commande</span><span>${this.h(d.salesOrderName)}</span></div>`:""}
      ${d.notes?`<div class="meta-row"><span class="ml">R\xE9f. client</span><span>${this.h(d.notes)}</span></div>`:""}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U.HT</th>
        <th class="r">P.U.TTC</th><th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${E}
      ${f}
      ${T}
      ${_}
    </tbody>
  </table>

  <table class="recap">
    <thead><tr>
      <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
      <th>Consigne (F)</th><th>D\xE9consigne (F)</th><th>Qt\xE9 Csgn</th><th>Qt\xE9 Dcsgn</th>
    </tr></thead>
    <tbody><tr>
      <td class="r">${this.fmt(this.totalColis)}</td>
      <td class="r">${this.fmt(this.totalPET)}</td>
      <td class="r">${this.fmt(this.totalCasier)}</td>
      <td class="r">${this.fmt(d.totalLiquideNu??0)}</td>
      <td class="r">${this.fmt(this.consigneMontant)}</td>
      <td class="r">\u2013 ${this.fmt(this.deconsigneMontant)}</td>
      <td class="r">${this.fmt(this.qteConsigne)}</td>
      <td class="r">\u2013 ${this.fmt(this.qteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(d.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(d.totalTVA)} F</span></div>
      ${d.totalPrecompte?`<div class="tot-row"><span>Pr\xE9compte (PSA)</span><span>${this.fmt(d.totalPrecompte)} F</span></div>`:""}
      ${(d.fraisEnlevementTTC??0)>0?`<div class="tot-row enlevement"><span>Frais d'enl\xE8vement</span><span>+ ${this.fmt(d.fraisEnlevementTTC)} F</span></div>`:""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(d.totalTTC)} F</span></div>
      ${(d.totalRistourne??0)>0?`<div class="tot-row ristourne"><span>Ristournes (\xE0 r\xE9cup\xE9rer)</span><span>${this.fmt(d.totalRistourne)} F</span></div>`:""}
      ${(d.totalRabais??0)>0?`<div class="tot-row rabais"><span>Rabais HT</span><span>- ${this.fmt(d.totalRabais)} F</span></div>`:""}
      ${(d.totalRabaisTTC??0)>0?`<div class="tot-row rabais"><span>Rabais TTC d\xE9duit</span><span>- ${this.fmt(d.totalRabaisTTC)} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(I)} F</span></div>
      ${d.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(d.montantPaye)} F</span></div>`:""}
      ${(d.montantDu??0)>.01?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(d.montantDu)} F</span></div>`:""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(I)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du livreur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature du client</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${d.createdBy?"Agent : "+this.h(d.createdBy)+" \xB7 ":""}${this.h(this.companyName)}</div>
</div>`}buildTicketBody(){let t=this.invoice,d=this.docType==="avoir"?"AVOIR":"FACTURE",m=t.netAPayer??(t.totalTTC??0)+(t.fraisEnlevementTTC??0),E=this.salesLines.map(_=>`
      <tr>
        <td class="tname">${this.h(_.productCode||_.description)}</td>
        <td class="r">${this.fmt(_.quantity)}\xD7${this.fmt(_.prixUnitaireTTC??_.prixUnitaire)}</td>
        <td class="r">${this.fmt(_.montantTTC)}</td>
      </tr>`).join(""),f=this.consigneLines.length?`
      <tr class="sep"><td colspan="3">\u2014 Consignes \u2014</td></tr>
      ${this.consigneLines.map(_=>`
        <tr><td class="tname">${this.h(_.productCode||_.description)}</td>
            <td class="r">${this.fmt(_.quantity)}</td>
            <td class="r">${this.fmt(_.montantTTC)}</td>
        </tr>`).join("")}`:"",T=this.deconsigneLines.length?`
      <tr class="sep"><td colspan="3">\u2014 D\xE9consignes \u2014</td></tr>
      ${this.deconsigneLines.map(_=>`
        <tr><td class="tname">${this.h(_.productCode||_.description)}</td>
            <td class="r">${this.fmt(Math.abs(_.quantity??0))}</td>
            <td class="r">-${this.fmt(Math.abs(_.montantTTC??0))}</td>
        </tr>`).join("")}`:"";return`
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${d}</div>
  <div class="t-ref">${this.h(t.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(t.date)}</span></div>
  <div class="t-line"><span>Client</span><span>${this.h(t.partnerName)}</span></div>
  ${t.notes?`<div class="t-line"><span>R\xE9f. client</span><span>${this.h(t.notes)}</span></div>`:""}
  <div class="t-sep"></div>
  <table class="t-lines">
    <tbody>${E}${f}${T}</tbody>
  </table>
  <div class="t-sep"></div>
  <div class="t-line small"><span>Total Colis</span><span>${this.fmt(this.totalColis)}</span></div>
  ${this.totalPET>0?`<div class="t-line small"><span>Total PET</span><span>${this.fmt(this.totalPET)}</span></div>`:""}
  ${this.totalCasier>0?`<div class="t-line small"><span>Total Casier</span><span>${this.fmt(this.totalCasier)}</span></div>`:""}
  ${(t.totalLiquideNu??0)>0?`<div class="t-line small"><span>Liq. Nu</span><span>${this.fmt(t.totalLiquideNu)} F</span></div>`:""}
  ${this.consigneMontant>0?`<div class="t-line small"><span>Consigne</span><span>${this.fmt(this.consigneMontant)} F</span></div>`:""}
  ${this.deconsigneMontant>0?`<div class="t-line small"><span>D\xE9consigne</span><span>\u2013 ${this.fmt(this.deconsigneMontant)} F</span></div>`:""}
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(t.totalHT)} F</span></div>
  <div class="t-line"><span>TVA 19,25%</span><span>${this.fmt(t.totalTVA)} F</span></div>
  ${t.totalPrecompte?`<div class="t-line"><span>PSA</span><span>${this.fmt(t.totalPrecompte)} F</span></div>`:""}
  ${(t.fraisEnlevementTTC??0)>0?`<div class="t-line t-enlevement"><span>Enl\xE8vement</span><span>+ ${this.fmt(t.fraisEnlevementTTC)} F</span></div>`:""}
  <div class="t-line t-subtotal"><span>Total TTC</span><span>${this.fmt(t.totalTTC)} F</span></div>
  ${(t.totalRistourne??0)>0?`
  <div class="t-sep-dots"></div>
  <div class="t-ristourne-hdr">RISTOURNES (\xE0 r\xE9cup\xE9rer)</div>
  <div class="t-line t-ristourne"><span>Total ristournes</span><span>${this.fmt(t.totalRistourne)} F</span></div>
  <div class="t-sep-dots"></div>`:""}
  <div class="t-sep"></div>
  <div class="t-total"><span>NET \xC0 PAYER</span><span>${this.fmt(m)} F</span></div>
  ${t.montantPaye?`<div class="t-line"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(t.montantPaye)} F</span></div>`:""}
  ${(t.montantDu??0)>.01?`<div class="t-line small"><span>Reste d\xFB</span><span>${this.fmt(t.montantDu)} F</span></div>`:""}
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(m)}</div>
  <div class="t-thanks">Merci de votre confiance !</div>
  ${t.createdBy?`<div class="t-line small"><span>Agent</span><span>${this.h(t.createdBy)}</span></div>`:""}
  <div class="t-sep"></div>
  <div class="t-sig-box">
    <div class="t-sig-lbl">Signature du livreur</div>
    <div class="t-sig-name">Nom : ___________________________</div>
    <div class="t-sig-area"></div>
  </div>
  <div class="t-sig-gap"></div>
  <div class="t-sig-box">
    <div class="t-sig-lbl">Cachet &amp; signature client</div>
    <div class="t-sig-name">Nom : ___________________________</div>
    <div class="t-sig-area"></div>
  </div>
</div>`}buildPurchaseInvoiceBody(t=!1){let d=this.purchaseInvoice,m=d.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR",E=this.purchaseTotalRabaisHT,f=this.purchaseTotalRabaisTTC,T=this.purchaseNormalLines.map(h=>{let b=h.prixUnitaire??0,P=b*(1+(h.tauxTVA??0)/100),y=h.rabaisUnitaire??0,L=y*(1+(h.tauxTVA??0)/100),W=(h.montantHT??0)+(h.montantTVA??0)+(h.precompte??0);return`
      <tr>
        <td>${this.h(h.productCode)}</td>
        <td class="desc">${this.h(h.description)}</td>
        <td class="r">${this.fmt(h.quantity)}</td>
        <td class="r">${this.fmt(b)}</td>
        <td class="r bold-teal">${this.fmt(P)}</td>
        <td class="r rabais">${y>0?"\u2013"+this.fmt(y):"\u2014"}</td>
        <td class="r rabais-ttc">${L>0?"\u2013"+this.fmt(L):"\u2014"}</td>
        <td class="r">${this.fmt(h.montantHT)}</td>
        <td class="r bold">${this.fmt(Math.round(W))}</td>
      </tr>`}).join(""),_=this.purchaseConsigneLines.length?`
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.purchaseConsigneLines.map(h=>`
        <tr class="consigne-row">
          <td>${this.h(h.productCode)}</td>
          <td class="desc">${this.h(h.description)}</td>
          <td class="r">${this.fmt(h.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(h.montantTTC)}</td>
        </tr>`).join("")}`:"",I=this.purchaseDeconsigneLines.length?`
      <tr class="deconsigne-header"><td colspan="9">D\xC9CONSIGNES</td></tr>
      ${this.purchaseDeconsigneLines.map(h=>`
        <tr class="consigne-row">
          <td>${this.h(h.productCode)}</td>
          <td class="desc">${this.h(h.description)}</td>
          <td class="r">${this.fmt(Math.abs(h.quantity??0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(h.montantTTC)}</td>
        </tr>`).join("")}`:"",u=d.netAPayer??d.totalTTC??0;return`
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${m}</div>
      <div class="doc-ref">${this.h(d.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">FOURNISSEUR</div>
      <div class="meta-value">${this.h(d.partnerName)}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(d.date)}</span></div>
      ${d.dateEcheance?`<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(d.dateEcheance)}</span></div>`:""}
      ${d.purchaseOrderName?`<div class="meta-row"><span class="ml">Commande</span><span>${this.h(d.purchaseOrderName)}</span></div>`:""}
      ${d.notes?`<div class="meta-row"><span class="ml">R\xE9f.</span><span>${this.h(d.notes)}</span></div>`:""}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U.HT</th>
        <th class="r">P.U.TTC</th><th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${T}
      ${_}
      ${I}
    </tbody>
  </table>

  <table class="recap">
    <thead><tr>
      <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
      <th>Consigne (F)</th><th>D\xE9consigne (F)</th><th>Qt\xE9 Csgn</th><th>Qt\xE9 Dcsgn</th>
    </tr></thead>
    <tbody><tr>
      <td class="r">${this.fmt(this.purchaseTotalColis)}</td>
      <td class="r">${this.fmt(this.purchaseTotalPET)}</td>
      <td class="r">0</td>
      <td class="r">${this.fmt(d.totalLiquideNu??0)}</td>
      <td class="r">${this.fmt(this.purchaseConsigneMontant)}</td>
      <td class="r">\u2013 ${this.fmt(this.purchaseDeconsigneMontant)}</td>
      <td class="r">${this.fmt(this.purchaseQteConsigne)}</td>
      <td class="r">\u2013 ${this.fmt(this.purchaseQteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(d.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(d.totalTVA)} F</span></div>
      ${d.totalPrecompte?`<div class="tot-row"><span>Pr\xE9compte (PSA)</span><span>${this.fmt(d.totalPrecompte)} F</span></div>`:""}
      ${(d.fraisEnlevementTTC??0)>0?`<div class="tot-row enlevement"><span>Frais d'enl\xE8vement</span><span>+ ${this.fmt(d.fraisEnlevementTTC)} F</span></div>`:""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(d.totalTTC)} F</span></div>
      ${E>0?`<div class="tot-row ristourne"><span>Rabais HT (601901)</span><span>\u2013 ${this.fmt(Math.round(E))} F</span></div>`:""}
      ${f>0?`<div class="tot-row rabais"><span>Rabais TTC d\xE9duit</span><span>\u2013 ${this.fmt(Math.round(f))} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(u)} F</span></div>
      ${d.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(d.montantPaye)} F</span></div>`:""}
      ${(d.montantDu??0)>.01?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(d.montantDu)} F</span></div>`:""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(u)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du fournisseur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${d.createdBy?"Agent : "+this.h(d.createdBy)+" \xB7 ":""}${this.h(this.companyName)}</div>
</div>`}buildPurchaseInvoiceTicketBody(){let t=this.purchaseInvoice,d=t.type==="credit_note"?"AVOIR FOURN.":"FACT. FOURN.",m=t.netAPayer??t.totalTTC??0,E=this.purchaseInvoiceLines.map(f=>`
      <tr>
        <td class="tname">${this.h(f.productCode||f.description)}</td>
        <td class="r">${this.fmt(f.quantity)}\xD7${this.fmt(f.prixUnitaire)}</td>
        <td class="r">${this.fmt(f.montantTTC)}</td>
      </tr>`).join("");return`
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${d}</div>
  <div class="t-ref">${this.h(t.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(t.date)}</span></div>
  <div class="t-line"><span>Fournisseur</span><span>${this.h(t.partnerName)}</span></div>
  <div class="t-sep"></div>
  <table class="t-lines"><tbody>${E}</tbody></table>
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(t.totalHT)} F</span></div>
  <div class="t-line"><span>TVA</span><span>${this.fmt(t.totalTVA)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-total"><span>NET \xC0 PAYER</span><span>${this.fmt(m)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(m)}</div>
</div>`}buildPurchaseOrderBody(){let t=this.purchaseOrder,d=(t.lines||[]).map((m,E)=>`
      <tr>
        <td class="r idx">${E+1}</td>
        <td>${this.h(m.productCode)}</td>
        <td class="desc">${this.h(m.description)}</td>
        <td class="r">${this.fmt(m.quantity)}</td>
        <td class="r">${this.fmt(m.prixUnitaire)}</td>
        <td class="r">${m.tauxTVA?m.tauxTVA+"%":"\u2014"}</td>
        <td class="r">${this.fmt(m.montantHT)}</td>
        <td class="r bold">${this.fmt(m.montantTTC)}</td>
      </tr>`).join("");return`
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE COMMANDE</div>
      <div class="doc-ref">${this.h(t.name)}</div>
    </div>
  </div>
  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">FOURNISSEUR</div>
      <div class="meta-value">${this.h(t.partnerName||"\u2014")}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(t.date)}</span></div>
      ${t.dateExpected?`<div class="meta-row"><span class="ml">Livraison pr\xE9vue</span><span>${this.fmtDate(t.dateExpected)}</span></div>`:""}
      ${t.notes?`<div class="meta-row"><span class="ml">Notes</span><span>${this.h(t.notes)}</span></div>`:""}
    </div>
  </div>
  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th><th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U. HT</th>
        <th class="r">TVA</th><th class="r">Total HT</th><th class="r">Total TTC</th>
      </tr>
    </thead>
    <tbody>${d}</tbody>
  </table>
  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(t.totalHT)} F</span></div>
      <div class="tot-row"><span>Taxes (TVA + PSA)</span><span>${this.fmt((t.totalTTC??0)-(t.totalHT??0))} F</span></div>
      <div class="tot-row net"><span>TOTAL TTC</span><span>${this.fmt(t.totalTTC)} F</span></div>
    </div>
  </div>
  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(t.totalTTC)}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le fournisseur</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la soci\xE9t\xE9</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Bon de commande soumis \xE0 acceptation du fournisseur \xB7 ${this.h(this.companyName)}</div>
</div>`}buildSalesOrderBody(){let t=this.salesOrder,m=(t.lines||[]).filter(E=>E.productId||E.productCode&&E.productCode.trim()).map((E,f)=>`
      <tr>
        <td class="r idx">${f+1}</td>
        <td>${this.h(E.productCode)}</td>
        <td class="desc">${this.h(E.description)}</td>
        <td class="r">${this.fmt(E.quantity)}</td>
        <td class="r">${this.fmt(E.prixUnitaire)}</td>
        ${E.tauxRemise?`<td class="r">${E.tauxRemise}%</td>`:'<td class="r">\u2014</td>'}
        <td class="r">${E.tauxTVA?E.tauxTVA+"%":"\u2014"}</td>
        <td class="r">${this.fmt(E.montantHT)}</td>
        <td class="r bold">${this.fmt(E.montantTTC)}</td>
      </tr>`).join("");return`
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE COMMANDE</div>
      <div class="doc-ref">${this.h(t.name)}</div>
    </div>
  </div>
  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT</div>
      <div class="meta-value">${this.h(t.partnerName||"\u2014")}</div>
      ${t.warehouseName?`<div class="meta-sub">Entrep\xF4t : ${this.h(t.warehouseName)}</div>`:""}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(t.date)}</span></div>
      ${t.dateEcheance?`<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(t.dateEcheance)}</span></div>`:""}
      ${t.invoiceName?`<div class="meta-row"><span class="ml">Facture</span><span>${this.h(t.invoiceName)}</span></div>`:""}
      ${t.notes?`<div class="meta-row"><span class="ml">Notes</span><span>${this.h(t.notes)}</span></div>`:""}
    </div>
  </div>
  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th><th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U. HT</th>
        <th class="r">Remise</th><th class="r">TVA</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>${m}</tbody>
  </table>
  <div class="totals-wrap">
    <div class="totals">
      ${t.totalRemise?`<div class="tot-row"><span>Remise totale</span><span>\u2013 ${this.fmt(t.totalRemise)} F</span></div>`:""}
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(t.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(t.totalTVA)} F</span></div>
      ${(t.totalPrecompte??0)>0?`<div class="tot-row"><span>PSA (Pr\xE9compte)</span><span>${this.fmt(t.totalPrecompte)} F</span></div>`:""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(t.totalTTC)} F</span></div>
      ${(t.fraisEnlevementTTC??0)>0?`<div class="tot-row"><span>Frais d'enl\xE8vement</span><span>${this.fmt(t.fraisEnlevementTTC)} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt((t.totalTTC??0)+(t.fraisEnlevementTTC??0))} F</span></div>
    </div>
  </div>
  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres((t.totalTTC??0)+(t.fraisEnlevementTTC??0))}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le client</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la soci\xE9t\xE9</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${t.createdBy?"Agent : "+this.h(t.createdBy)+" \xB7 ":""}Bon de commande \xB7 ${this.h(this.companyName)}</div>
</div>`}buildBonBody(){let t=this.picking,d=this.pickingMoves.map((E,f)=>`
      <tr>
        <td class="r idx">${f+1}</td>
        <td>${this.h(E.productCode)}</td>
        <td class="desc">${this.h(E.productName)}</td>
        <td class="r">${this.fmt(E.qtyDemanded)}</td>
        <td class="r bold">${this.fmt(E.qtyDone??E.qtyDemanded)}</td>
        <td>${this.h(E.uomName)}</td>
      </tr>`).join(""),m=this.pickingMoves.reduce((E,f)=>E+(f.qtyDone??f.qtyDemanded??0),0);return`
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE LIVRAISON</div>
      <div class="doc-ref">${this.h(t.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT / DESTINATAIRE</div>
      <div class="meta-value">${this.h(t.partnerName||"\u2014")}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(t.scheduledDate)}</span></div>
      ${t.origin?`<div class="meta-row"><span class="ml">Origine</span><span>${this.h(t.origin)}</span></div>`:""}
      ${t.notes?`<div class="meta-row"><span class="ml">Notes</span><span>${this.h(t.notes)}</span></div>`:""}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th>
        <th>Code</th>
        <th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9 demand\xE9e</th>
        <th class="r">Qt\xE9 livr\xE9e</th>
        <th>U.M.</th>
      </tr>
    </thead>
    <tbody>
      ${d}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="r total-lbl">TOTAL COLIS LIVR\xC9S</td>
        <td class="r bold total-val">${this.fmt(m)}</td>
        <td></td>
      </tr>
    </tfoot>
  </table>

  <div class="signatures">
    <div class="sig">
      <div class="sig-lbl">Signature du livreur</div>
      <div class="sig-name">Nom : ____________________</div>
      <div class="sig-area"></div>
    </div>
    <div class="sig">
      <div class="sig-lbl">Cachet et signature du client</div>
      <div class="sig-name">Nom : ____________________</div>
      <div class="sig-area"></div>
    </div>
  </div>
  <div class="footer-note">Document non contractuel \xB7 ${this.h(this.companyName)}</div>
</div>`}static{this.\u0275fac=function(d){return new(d||o)}}static{this.\u0275cmp=B({type:o,selectors:[["app-print-preview"]],inputs:{invoice:"invoice",picking:"picking",purchaseInvoice:"purchaseInvoice",purchaseOrder:"purchaseOrder",salesOrder:"salesOrder",docType:"docType",companyName:"companyName",companyPhone:"companyPhone",companyLogoUrl:"companyLogoUrl",companyLogoDataUrl:"companyLogoDataUrl",companyInfo:"companyInfo"},outputs:{closed:"closed"},decls:33,vars:22,consts:[["(click).self","close()",1,"pp-overlay"],[1,"pp-modal"],[1,"pp-header"],[1,"pp-header-left"],[1,"material-icons"],[1,"pp-close",3,"click"],[1,"pp-formats"],[1,"pp-body"],[1,"preview-page"],[1,"inv-doc"],[1,"tkt"],[1,"pp-footer"],[1,"pp-btn-cancel",3,"click"],[1,"pp-btn-print",3,"click","disabled"],[1,"fmt-btn",3,"active"],[1,"fmt-btn",3,"click"],[1,"inv-header"],[1,"inv-company"],["alt","logo",1,"inv-co-logo",3,"src"],[1,"inv-co-name"],[1,"inv-co-sub"],[1,"inv-title-block"],[1,"inv-doctype"],[1,"inv-ref"],[1,"inv-meta"],[1,"inv-meta-client"],[1,"inv-meta-lbl"],[1,"inv-meta-val"],[1,"inv-meta-sub"],[1,"inv-meta-dates"],[1,"inv-mrow"],[1,"inv-lines"],[1,"tdesc"],[1,"tr"],[1,"inv-recap"],[1,"tr","trabais"],[1,"inv-totals-wrap"],[1,"inv-totals"],[1,"inv-trow"],[1,"inv-trow","inv-enlevement"],[1,"inv-trow","inv-grand"],[1,"inv-trow","inv-ristourne"],[1,"inv-trow","inv-net"],[1,"inv-trow","inv-paid"],[1,"inv-trow","inv-due"],[1,"inv-lettres"],[1,"inv-sigs"],[1,"inv-sig"],[1,"inv-sig-lbl"],[1,"inv-sig-area"],[1,"tr","tbold-teal"],[1,"tr","trabais-ttc"],[1,"tr","tbold"],[1,"inv-section-hdr"],["colspan","9"],[1,"inv-consigne"],["colspan","4"],[1,"inv-section-hdr","inv-decons-hdr"],[1,"inv-rst"],["colspan","2"],[1,"tkt-logo"],[1,"tkt-co"],[1,"tkt-phone"],[1,"tkt-sep"],[1,"tkt-type"],[1,"tkt-ref"],[1,"tkt-row"],[1,"tkt-row","sm"],[1,"tkt-row","tkt-subtotal"],[1,"tkt-total"],[1,"tkt-lettres"],[1,"tkt-thanks"],[1,"tkt-sig-box"],[1,"tkt-sig-lbl"],[1,"tkt-sig-name"],[1,"tkt-sig-area"],[1,"tkt-sig-box",2,"margin-top","3mm"],["alt","logo",3,"src"],[1,"tkt-prod-name"],[1,"tkt-prod-row"],[1,"tbold"],[1,"tkt-sep-label"],[1,"tkt-sep-dots"],[1,"tkt-ristourne-hdr"],[1,"tkt-row","tkt-ristourne-tot"],["colspan","4",1,"tr","inv-total-lbl"],[1,"tr","inv-total-val"],[1,"inv-sig-name"],[1,"inv-footer-note"],[1,"tr","tgray"],[1,"inv-trow","inv-deduct"]],template:function(d,m){d&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),i(5,"print"),e(),n(6,"span"),i(7,"Aper\xE7u avant impression \u2014 "),n(8,"strong"),i(9),e()()(),n(10,"button",5),O("click",function(){return m.close()}),n(11,"span",4),i(12,"close"),e()()(),c(13,J,3,0,"div",6),c(14,et,3,0,"div",6),n(15,"div",7)(16,"div",8),c(17,Tt,134,34,"div",9),c(18,qt,86,29,"div",10),c(19,Kt,66,10,"div",9),c(20,ve,131,30,"div",9),c(21,he,44,11,"div",10),c(22,Se,84,14,"div",9),c(23,Ne,89,17,"div",9),e()(),n(24,"div",11)(25,"button",12),O("click",function(){return m.close()}),n(26,"span",4),i(27,"close"),e(),i(28," Fermer "),e(),n(29,"button",13),O("click",function(){return m.print()}),n(30,"span",4),i(31),e(),i(32),e()()()()),d&2&&(a(9),k("",m.docTitle," ",m.docRef),a(4),p(m.docType!=="bon"&&m.docType!=="purchase_order"&&m.docType!=="sales_order"?13:-1),a(),p(m.docType==="purchase_order"||m.docType==="sales_order"?14:-1),a(),M("ticket-mode",m.format==="ticket"),a(),M("page-a4",m.format==="a4")("page-a5",m.format==="a5")("page-ticket",m.format==="ticket"||m.docType==="bon"&&m.format==="a4"),a(),p((m.docType==="invoice"||m.docType==="avoir")&&m.format!=="ticket"?17:-1),a(),p((m.docType==="invoice"||m.docType==="avoir")&&m.format==="ticket"?18:-1),a(),p(m.docType==="bon"?19:-1),a(),p(m.docType==="purchase_invoice"&&m.format!=="ticket"?20:-1),a(),p(m.docType==="purchase_invoice"&&m.format==="ticket"?21:-1),a(),p(m.docType==="purchase_order"?22:-1),a(),p(m.docType==="sales_order"?23:-1),a(6),w("disabled",m.printing),a(2),l(m.printing?"hourglass_empty":"print"),a(),v(" ",m.printing?"G\xE9n\xE9ration...":"Imprimer"," "))},dependencies:[V],styles:[".pp-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000a6;display:flex;align-items:flex-start;justify-content:center;z-index:9999;padding:20px;overflow-y:auto}.pp-modal[_ngcontent-%COMP%]{background:var(--bg-surface);border-radius:10px;width:100%;max-width:860px;display:flex;flex-direction:column;max-height:calc(100vh - 40px);box-shadow:0 20px 60px #0006}.pp-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--border);background:var(--bg-hover);border-radius:10px 10px 0 0}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:14px;color:var(--text-primary)}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:var(--accent);font-size:20px}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent)}.pp-close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;color:var(--text-muted);display:flex;align-items:center;border-radius:50%;padding:4px;transition:all .15s}.pp-close[_ngcontent-%COMP%]:hover{background:var(--bg-elevated);color:var(--text-primary)}.pp-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px}.pp-formats[_ngcontent-%COMP%]{display:flex;gap:8px;padding:12px 20px;border-bottom:1px solid var(--border-light);background:var(--bg-surface)}.fmt-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border:1px solid var(--border);border-radius:20px;background:var(--bg-surface);color:var(--text-secondary);font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.fmt-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:15px}.fmt-btn[_ngcontent-%COMP%]:hover{background:var(--bg-hover);border-color:var(--accent)}.fmt-btn.active[_ngcontent-%COMP%]{background:var(--accent);color:#fff;border-color:var(--accent)}.pp-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;background:var(--bg-elevated);padding:32px 24px;display:flex;justify-content:center;align-items:flex-start;min-height:420px}.pp-body.ticket-mode[_ngcontent-%COMP%]{align-items:flex-start;padding-top:24px}.preview-page[_ngcontent-%COMP%]{background:var(--bg-surface);box-shadow:0 4px 24px #00000038;transform-origin:top center}.preview-page.page-a4[_ngcontent-%COMP%]{width:210mm;min-height:297mm;transform:scale(.6);margin-top:-59mm;margin-bottom:-118.8mm}.preview-page.page-a5[_ngcontent-%COMP%]{width:148mm;min-height:210mm;transform:scale(.72);margin-top:-29mm;margin-bottom:-58.8mm}.preview-page.page-ticket[_ngcontent-%COMP%]{width:80mm;min-height:120mm;transform:scale(.9);margin-bottom:-12mm}.inv-doc[_ngcontent-%COMP%]{padding:14mm;font-family:Arial,sans-serif;font-size:9pt;color:var(--text-primary)}.inv-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #222;padding-bottom:4mm;margin-bottom:8mm}.inv-co-logo[_ngcontent-%COMP%]{max-height:48px;max-width:120px;object-fit:contain;display:block;margin-bottom:4px}.inv-co-name[_ngcontent-%COMP%]{font-size:15pt;font-weight:700;color:var(--accent)}.inv-co-sub[_ngcontent-%COMP%]{font-size:9pt;color:var(--text-secondary);margin-top:2px}.inv-title-block[_ngcontent-%COMP%]{text-align:right}.inv-doctype[_ngcontent-%COMP%]{font-size:18pt;font-weight:800;letter-spacing:1px}.inv-ref[_ngcontent-%COMP%]{font-size:11pt;font-weight:600;color:var(--accent);margin-top:2px}.inv-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:8mm}.inv-meta-lbl[_ngcontent-%COMP%]{font-size:7pt;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:2px}.inv-meta-val[_ngcontent-%COMP%]{font-size:12pt;font-weight:700}.inv-meta-sub[_ngcontent-%COMP%]{font-size:8pt;color:var(--text-secondary)}.inv-meta-dates[_ngcontent-%COMP%]{text-align:right}.inv-mrow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;font-size:9pt;margin-bottom:2px}.inv-mrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:var(--text-muted);font-size:8pt}table.inv-lines[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:6mm;font-size:8.5pt}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:var(--accent);color:#fff}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px 6px;text-align:left;font-weight:600;font-size:7.5pt}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:var(--bg-elevated)}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px 6px;border-bottom:1px solid #e8e8e8}table.inv-lines[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:2px solid var(--accent);padding:4px 6px;background:var(--bg-elevated)}.tdesc[_ngcontent-%COMP%]{max-width:110px;word-break:break-word}.tr[_ngcontent-%COMP%]{text-align:right}.tbold[_ngcontent-%COMP%]{font-weight:700}.tbold-teal[_ngcontent-%COMP%]{font-weight:700;color:var(--accent)}.trabais[_ngcontent-%COMP%]{color:#e65100;font-weight:600}.trabais-ttc[_ngcontent-%COMP%]{color:#c0392b;font-weight:700}.tgray[_ngcontent-%COMP%]{color:var(--text-muted);font-size:7.5pt}.inv-section-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:var(--accent-light);font-size:7pt;font-weight:700;color:var(--accent);text-transform:uppercase;padding:3px 6px}.inv-decons-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#fff3e0;color:#e67e22}.inv-consigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .inv-rst[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:var(--bg-hover);color:var(--text-secondary);font-size:8pt}.inv-red[_ngcontent-%COMP%]{color:var(--danger)}.inv-recap[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:6px;font-size:7.5pt}.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:var(--accent-light)}.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:3px 5px;font-weight:700;color:var(--accent);text-align:right;border:1px solid #cde;font-size:7pt}.inv-recap[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px 5px;border:1px solid #e0e0e0;background:#fafafa;font-weight:600}.inv-totals-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:5mm}.inv-totals[_ngcontent-%COMP%]{width:72mm}.inv-trow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:2px 6px;font-size:9pt;border-bottom:1px solid #eee}.inv-grand[_ngcontent-%COMP%]{font-weight:700;background:var(--bg-elevated)}.inv-net[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;background:var(--accent);color:#fff;padding:4px 6px}.inv-deduct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--danger)}.inv-ristourne[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.inv-enlevement[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:#c60;font-weight:600}.inv-paid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.inv-due[_ngcontent-%COMP%]{font-weight:700;color:var(--danger)}.inv-total-lbl[_ngcontent-%COMP%]{font-size:8.5pt;font-weight:700}.inv-total-val[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;color:var(--accent)}.inv-lettres[_ngcontent-%COMP%]{font-size:8.5pt;font-style:italic;border-top:1px solid var(--border);padding-top:3mm;margin-bottom:8mm}.inv-sigs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10mm;margin-top:8mm}.inv-sig[_ngcontent-%COMP%]{flex:1}.inv-sig-lbl[_ngcontent-%COMP%]{font-size:8pt;font-weight:700;margin-bottom:2mm}.inv-sig-name[_ngcontent-%COMP%]{font-size:8pt;color:var(--text-secondary);margin-bottom:2mm}.inv-sig-area[_ngcontent-%COMP%]{height:20mm;border:1px solid #aaa;border-radius:2px}.inv-footer-note[_ngcontent-%COMP%]{font-size:7pt;color:var(--text-muted);text-align:center;margin-top:6mm;border-top:1px solid #eee;padding-top:2mm}.tkt[_ngcontent-%COMP%]{width:80mm;padding:3mm 4mm;font-family:Courier New,monospace;font-size:8pt;font-weight:700}.tkt-logo[_ngcontent-%COMP%]{text-align:center;margin-bottom:2mm}.tkt-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:32px;max-width:60mm;object-fit:contain}.tkt-co[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;text-align:center;margin-bottom:1mm}.tkt-phone[_ngcontent-%COMP%]{font-size:7.5pt;text-align:center;color:var(--text-secondary);margin-bottom:2mm}.tkt-sep[_ngcontent-%COMP%]{border-top:1px dashed #666;margin:2mm 0}.tkt-type[_ngcontent-%COMP%]{font-size:12pt;font-weight:800;text-align:center;letter-spacing:2px;margin:1mm 0}.tkt-ref[_ngcontent-%COMP%]{font-size:9pt;font-weight:700;text-align:center;color:var(--text-primary);margin-bottom:2mm}.tkt-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:8pt;margin:1px 0}.tkt-row.sm[_ngcontent-%COMP%]{font-size:7.5pt;color:var(--text-secondary)}.tkt-prod-name[_ngcontent-%COMP%]{font-size:7.5pt;margin-top:1mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tkt-prod-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:7.5pt;margin-bottom:1mm;padding-left:2mm}.tkt-sep-label[_ngcontent-%COMP%]{text-align:center;font-size:7pt;color:var(--text-muted);padding:1mm 0}.tkt-sep-dots[_ngcontent-%COMP%]{border-top:1px dotted #666;margin:2mm 0}.tkt-subtotal[_ngcontent-%COMP%]{font-weight:700;border-top:1px solid #333;padding-top:1px}.tkt-ristourne-hdr[_ngcontent-%COMP%]{font-size:7pt;font-weight:800;text-align:center;color:var(--success);padding:2px 0;text-transform:uppercase;letter-spacing:1px}.tkt-ristourne-tot[_ngcontent-%COMP%]{font-weight:700}.tkt-ristourne-tot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.tkt-sig-box[_ngcontent-%COMP%]{width:100%;margin-top:2mm}.tkt-sig-lbl[_ngcontent-%COMP%]{font-size:7.5pt;font-weight:700;margin-bottom:1mm;text-align:center}.tkt-sig-name[_ngcontent-%COMP%]{font-size:7pt;color:var(--text-muted);margin-bottom:1mm}.tkt-sig-area[_ngcontent-%COMP%]{height:18mm;border:1px solid #999;border-radius:2px;width:100%}.tkt-total[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:11pt;font-weight:800;border-top:2px solid #111;border-bottom:2px solid #111;padding:1mm 0;margin:2mm 0}.tkt-lettres[_ngcontent-%COMP%]{font-size:6.5pt;font-style:italic;text-align:center;margin:2mm 0;color:var(--text-secondary)}.tkt-thanks[_ngcontent-%COMP%]{font-size:8.5pt;text-align:center;font-weight:700;margin:2mm 0}.tkt-sig[_ngcontent-%COMP%]{font-size:8pt;text-align:center;margin-top:4mm}.pp-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:14px 20px;border-top:1px solid var(--border);background:var(--bg-hover);border-radius:0 0 10px 10px}.pp-btn-cancel[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border:1px solid var(--border);border-radius:6px;background:var(--bg-surface);color:var(--text-secondary);font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-cancel[_ngcontent-%COMP%]:hover{background:var(--bg-hover)}.pp-btn-print[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 20px;background:var(--accent);color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-print[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--accent)}.pp-btn-print[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}"]})}}return o})(),Q=`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: Arial, sans-serif; }
.doc { padding: 14mm 14mm 10mm; max-width: 190mm; margin: 0 auto; }
.header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10mm; border-bottom: 2px solid #222; padding-bottom: 4mm; }
.co-logo { max-height: 52px; max-width: 130px; object-fit: contain; display: block; margin-bottom: 5px; }
.co-name { font-size: 14pt; font-weight: 700; color: #017E84; line-height: 1.2; }
.co-sigle { font-size: 10pt; font-weight: 500; color: #017E84; }
.co-info { font-size: 8.5pt; color: #444; margin-top: 2px; line-height: 1.3; }
.co-lbl { font-weight: 600; color: #222; }
.title-block { text-align: right; }
.doc-type { font-size: 18pt; font-weight: 800; letter-spacing: 1px; color: #222; }
.doc-ref { font-size: 11pt; font-weight: 600; color: #017E84; margin-top: 2px; }
.meta { display: flex; justify-content: space-between; margin-bottom: 8mm; }
.meta-label { font-size: 7pt; font-weight: 700; text-transform: uppercase; color: #888; margin-bottom: 2px; }
.meta-value { font-size: 12pt; font-weight: 700; }
.meta-sub { font-size: 8pt; color: #555; }
.meta-dates { text-align: right; }
.meta-row { display: flex; justify-content: space-between; gap: 12px; font-size: 9pt; margin-bottom: 2px; }
.ml { color: #888; font-size: 8pt; }
table.lines { width: 100%; border-collapse: collapse; margin-bottom: 5mm; font-size: 8.5pt; }
table.lines thead tr { background: #017E84; color: white; }
table.lines thead th { padding: 4px 6px; text-align: left; font-weight: 600; font-size: 7.5pt; }
table.lines tbody tr:nth-child(even) { background: #f7fafa; }
table.lines tbody td { padding: 3px 6px; border-bottom: 1px solid #e8e8e8; }
.r { text-align: right; }
.bold { font-weight: 700; }
.bold-teal { font-weight: 700; color: #017E84; }
.rabais { color: #e65100; font-weight: 600; }
.rabais-ttc { color: #c0392b; font-weight: 700; }
.desc { max-width: 120px; }
.consigne-header td, .section-header td { background: #e8f5f5; font-size: 7pt; font-weight: 700; color: #017E84; padding: 3px 6px; text-transform: uppercase; }
.deconsigne-header td { background: #fff3e0; font-size: 7pt; font-weight: 700; color: #e67e22; padding: 3px 6px; text-transform: uppercase; }
.consigne-row td, .ristourne-row td { background: #fafafa; color: #555; font-size: 8pt; }
table.recap { width: 100%; border-collapse: collapse; margin-bottom: 4mm; font-size: 7.5pt; }
table.recap thead tr { background: #e8f5f5; }
table.recap thead th { padding: 3px 5px; font-weight: 700; color: #017E84; text-align: right; border: 1px solid #cde; }
table.recap tbody td { padding: 3px 5px; border: 1px solid #e0e0e0; background: #fafafa; }
.totals-wrap { display: flex; justify-content: flex-end; margin-bottom: 5mm; }
.totals { width: 72mm; }
.tot-row { display: flex; justify-content: space-between; padding: 2px 6px; font-size: 9pt; border-bottom: 1px solid #eee; }
.tot-row.grand { font-weight: 700; background: #f0f8f8; }
.tot-row.taxes { font-weight: 600; color: #444; background: #f5f5f0; }
.tot-row.net { font-size: 11pt; font-weight: 800; background: #017E84; color: white; padding: 4px 6px; border-radius: 2px; }
.tot-row.deduct span:last-child { color: #c00; }
.tot-row.ristourne span:last-child { color: #2a7; }
.tot-row.enlevement span:last-child { color: #c60; font-weight: 600; }
.tot-row.paid span:last-child { color: #2a7; }
.tot-row.due { font-weight: 700; color: #c00; }
.lettres { font-size: 8.5pt; font-style: italic; border-top: 1px solid #ccc; padding-top: 3mm; margin-bottom: 8mm; }
.signatures { display: flex; justify-content: space-between; gap: 10mm; margin-top: 8mm; }
.sig { flex: 1; }
.sig-lbl { font-size: 8pt; font-weight: 700; margin-bottom: 2mm; }
.sig-name { font-size: 8pt; color: #555; margin-bottom: 2mm; }
.sig-area { height: 20mm; border: 1px solid #aaa; border-radius: 2px; }
.footer-note { font-size: 7pt; color: #aaa; text-align: center; margin-top: 6mm; border-top: 1px solid #eee; padding-top: 2mm; }
.idx { color: #aaa; font-size: 7pt; }
.total-lbl { font-size: 8.5pt; font-weight: 700; }
.total-val { font-size: 11pt; font-weight: 800; color: #017E84; }
table.lines tfoot td { border-top: 2px solid #017E84; padding: 4px 6px; background: #f0f8f8; }
@page { margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`,N=Q+`
body { font-size: 9pt; }
@page { size: A4 portrait; }
`,A=Q+`
body { font-size: 8pt; }
.doc { padding: 10mm 10mm 8mm; max-width: 138mm; }
.doc-type { font-size: 14pt; }
.doc-ref { font-size: 9.5pt; }
.co-name { font-size: 12pt; }
.co-info { font-size: 7.5pt; }
table.lines { font-size: 7.5pt; }
.tot-row.net { font-size: 9.5pt; }
.lettres { font-size: 7.5pt; }
.sig-area { height: 15mm; }
@page { size: A5 portrait; }
`,q=`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: 'Courier New', monospace; font-size: 9pt; font-weight: 700; width: 80mm; }
.ticket { width: 80mm; padding: 3mm 4mm; }
.t-logo { text-align: center; margin-bottom: 2mm; } .t-logo img { max-height: 32px; max-width: 60mm; object-fit: contain; }
.t-company { font-size: 12pt; font-weight: 800; text-align: center; margin-bottom: 1mm; }
.t-coinfo { font-size: 8pt; text-align: center; color: #555; margin-bottom: 1px; }
.t-phone { font-size: 8.5pt; text-align: center; color: #555; margin-bottom: 2mm; }
.t-sep { border-top: 1px dashed #666; margin: 2mm 0; }
.t-doctype { font-size: 13pt; font-weight: 800; text-align: center; letter-spacing: 2px; margin: 1mm 0; }
.t-ref { font-size: 10pt; font-weight: 700; text-align: center; color: #333; margin-bottom: 2mm; }
.t-line { display: flex; justify-content: space-between; font-size: 9pt; margin: 1px 0; }
.t-line.small { font-size: 8pt; color: #555; }
table.t-lines { width: 100%; border-collapse: collapse; margin: 1mm 0; }
table.t-lines td { padding: 1px 2px; font-size: 8.5pt; vertical-align: top; }
.tname { max-width: 40mm; }
.sep td { text-align: center; color: #222; font-size: 8.5pt; padding: 3px 0; font-weight: 700; border-top: 1px dotted #666; border-bottom: 1px dotted #666; }
.r { text-align: right; }
.t-subtotal { font-weight: 700; border-top: 1px solid #333; padding-top: 1px; }
.t-ristourne { font-weight: 700; }
.t-ristourne span:last-child { color: #1a7a3a; }
.t-ristourne-hdr { font-size: 8.5pt; font-weight: 800; text-align: center; color: #1a7a3a; padding: 2px 0; text-transform: uppercase; letter-spacing: 1px; }
.t-sep-dots { border-top: 1px dotted #666; margin: 2mm 0; }
.t-enlevement span:last-child { color: #c60; }
.t-total { display: flex; justify-content: space-between; font-size: 12pt; font-weight: 800; margin: 2mm 0; border-top: 2px solid #111; border-bottom: 2px solid #111; padding: 1mm 0; }
.t-lettres { font-size: 7.5pt; font-style: italic; text-align: center; margin: 2mm 0; color: #444; }
.t-thanks { font-size: 9pt; text-align: center; font-weight: 700; margin: 2mm 0; }
.t-sig-box { width: 100%; margin-top: 2mm; }
.t-sig-gap { height: 3mm; }
.t-sig-lbl { font-size: 8.5pt; font-weight: 700; margin-bottom: 1mm; text-align: center; }
.t-sig-name { font-size: 8pt; color: #444; margin-bottom: 1mm; }
.t-sig-area { height: 18mm; border: 1px solid #999; border-radius: 2px; width: 100%; }
@page { size: 80mm auto; margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`,Le=N;function Y(o){if(o===0)return"Z\xE9ro";if(o<0)return"Moins "+Y(-o);let s=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"],t=["","","vingt","trente","quarante","cinquante","soixante","soixante","quatre-vingt","quatre-vingt"];function d(h){if(h<20)return s[h];let b=Math.floor(h/10),P=h%10;if(b===7)return"soixante-"+(P===1?"et-onze":s[10+P]);if(b===9)return"quatre-vingt-"+(P===0?"":s[P]).replace(/^-/,"");let y=t[b];return P===0?y+(b===8?"s":""):P===1&&b!==8?y+"-et-un":y+"-"+s[P]}function m(h){if(h<100)return d(h);let b=Math.floor(h/100),P=h%100,y=b===1?"cent":d(b)+" cent";return P===0?y+(b>1?"s":""):y+" "+d(P)}let E=[],f=Math.floor(o/1e9);o%=1e9;let T=Math.floor(o/1e6);o%=1e6;let _=Math.floor(o/1e3);o%=1e3;let I=o;f&&E.push(m(f)+(f===1?" milliard":" milliards")),T&&E.push(m(T)+(T===1?" million":" millions")),_&&E.push(_===1?"mille":m(_)+" mille"),I&&E.push(m(I));let u=E.join(" ").trim().replace(/\s+/g," ");return u.charAt(0).toUpperCase()+u.slice(1)}export{K as a,z as b,Be as c};
