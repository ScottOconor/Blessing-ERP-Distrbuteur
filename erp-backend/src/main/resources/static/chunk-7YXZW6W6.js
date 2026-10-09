import{Ca as V,Cb as z,La as $,Na as c,Oa as p,Pa as T,R,Ra as C,S as D,Sa as f,X as B,Xa as n,Ya as e,Za as u,ab as U,bb as w,db as M,eb as r,gc as q,kb as L,ma as O,mb as i,nb as l,ob as v,pb as k,qa as a}from"./chunk-FZQTQV4O.js";var Z={CB12:"CASIER BOUTEILLE 12",CB24:"CASIER BOUTEILLE 24",CB12M:"CASIER BOUTEILLE 12 (METAL)",CB24M:"CASIER BOUTEILLE 24 (METAL)",CV12:"CASIER VERRE 12",CV24:"CASIER VERRE 24",CBG12:"CASIER BOUTEILLE GUINNESS 12",CBG15:"CASIER BOUTEILLE GUINNESS 15",CBG24:"CASIER BOUTEILLE GUINNESS 24",CBG12M:"CASIER BOUTEILLE GUINNESS METAL 12",CBG15M:"CASIER BOUTEILLE GUINNESS METAL 15",CBG24M:"CASIER BOUTEILLE GUINNESS METAL 24",CVG12:"CASIER VERRE GUINNESS 12",CVG15:"CASIER VERRE GUINNESS 15",CVG24:"CASIER VERRE GUINNESS 24",VIP12:"VIP 12",VIP24:"VIP 24",VCP12:"VCP 12",VCP24:"VCP 24",VIPG12:"VIP GUINNESS 12",VIPG15:"VIP GUINNESS 15",VIPG24:"VIP GUINNESS 24",EGUI12:"EMBALLAGE GUINNESS 12",EGUI15:"EMBALLAGE GUINNESS 15",EGUI24:"EMBALLAGE GUINNESS 24",PP:"PALETTE PLASTIQUE",PB:"PALETTE BOIS",TT:"TONNELET",BPM:"BOUTEILLE PET METAL",BGM:"BOUTEILLE GUINNESS METAL",B12:"BOUTEILLE GRAND MODELE",B120:"BOUTEILLE VIDE 120",B150:"BOUTEILLE VIDE 150",B75:"BOUTEILLE VIDE 75",BV12:"BOUTEILLE VIDE DE 12",CAIMET:"CAISSE METALLIQUE",CONS001:"CONSIGNE DIVERSE",INPN33:"EMBALLAGE INPN 33",EMB1:"EMBALLAGE 1",EMB2:"EMBALLAGE 2",EMB3:"EMBALLAGE 3",EMB4:"EMBALLAGE 4",EMB5:"EMBALLAGE 5",CAISMB:"CAISSE METAL BOUTEILLE","PALT-V":"PALETTE VERRE",PALTPL:"PALETTE PLASTIQUE (PL)",PRC01:"PORTE-CASIER 01",ELV01:"ELEVATEUR 01"},H=new Set(Object.keys(Z));var j=()=>[],Q=(o,s)=>s.value;function J(o,s){if(o&1){let t=U();n(0,"button",15),M("click",function(){let m=R(t).$implicit,x=r(2);return D(x.setFormat(m.value))}),n(1,"span",4),i(2),e(),i(3),e()}if(o&2){let t=s.$implicit,d=r(2);L("active",d.format===t.value),a(2),l(t.icon),a(),v(" ",t.label," ")}}function X(o,s){if(o&1&&(n(0,"div",6),C(1,J,4,4,"button",14,Q),e()),o&2){let t=r();a(),f(t.FORMATS)}}function tt(o,s){if(o&1){let t=U();n(0,"button",15),M("click",function(){R(t);let m=r().$implicit,x=r(2);return D(x.setFormat(m.value))}),n(1,"span",4),i(2),e(),i(3),e()}if(o&2){let t=r().$implicit,d=r(2);L("active",d.format===t.value),a(2),l(t.icon),a(),v(" ",t.label," ")}}function et(o,s){if(o&1&&c(0,tt,4,4,"button",14),o&2){let t=s.$implicit;p(t.value!=="ticket"?0:-1)}}function nt(o,s){if(o&1&&(n(0,"div",6),C(1,et,1,1,null,null,Q),e()),o&2){let t=r();a(),f(t.FORMATS)}}function it(o,s){if(o&1&&u(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,O)}}function at(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function ot(o,s){if(o&1&&(n(0,"div",28),i(1),e()),o&2){let t=r(2);a(),v("Entrep\xF4t : ",t.invoice==null?null:t.invoice.warehouseName)}}function dt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.invoice==null?null:t.invoice.dateEcheance))}}function lt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Commande"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice==null?null:t.invoice.salesOrderName)}}function st(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice.notes)}}function rt(o,s){o&1&&(n(0,"th",33),i(1,"Rabais HT/u"),e(),n(2,"th",33),i(3,"Rabais TTC/u"),e())}function mt(o,s){if(o&1&&(n(0,"td",35),i(1),e(),n(2,"td",52),i(3),e()),o&2){let t=r().$implicit,d=r(2);a(),l((t.rabaisUnitaire??0)>0?"\u2013"+d.fmt(t.rabaisUnitaire):"\u2014"),a(2),l((t.rabaisUnitaireTTC??0)>0?"\u2013"+d.fmt(t.rabaisUnitaireTTC):"\u2014")}}function ct(o,s){if(o&1&&(n(0,"tr")(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",50),i(10),e(),c(11,mt,4,2),n(12,"td",33),i(13),e(),n(14,"td",51),i(15),e()()),o&2){let t=s.$implicit,d=r(2);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(2),l(d.fmt(t.prixUnitaire)),a(2),l(d.fmt(t.prixUnitaireTTC??0)),a(),p(d.salesHasRabais?11:-1),a(2),l(d.fmt(t.montantHT)),a(2),l(d.fmt(t.montantTTC))}}function pt(o,s){if(o&1&&(n(0,"tr",54)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),u(7,"td")(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(),$("colspan",d.salesHasRabais?4:2),a(3),l(d.fmt(t.montantTTC))}}function vt(o,s){if(o&1&&(n(0,"tr",53)(1,"td"),i(2,"CONSIGNES"),e()(),C(3,pt,11,5,"tr",54,T)),o&2){let t=r(2);a(),$("colspan",t.salesHasRabais?9:7),a(2),f(t.consigneLines)}}function Et(o,s){if(o&1&&(n(0,"tr",54)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),u(7,"td")(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(),$("colspan",d.salesHasRabais?4:2),a(3),l(d.fmt(t.montantTTC))}}function xt(o,s){if(o&1&&(n(0,"tr",55)(1,"td"),i(2,"D\xC9CONSIGNES"),e()(),C(3,Et,11,5,"tr",54,T)),o&2){let t=r(2);a(),$("colspan",t.salesHasRabais?9:7),a(2),f(t.deconsigneLines)}}function ut(o,s){o&1&&u(0,"td")(1,"td")}function ht(o,s){if(o&1&&(n(0,"tr",56)(1,"td",57),i(2),e(),n(3,"td",33),i(4),e(),n(5,"td",33),i(6),e(),u(7,"td"),c(8,ut,2,0),n(9,"td",33),i(10),e(),n(11,"td",33),i(12),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.categoryName),a(2),l(d.fmt(t.quantite)),a(2),l(d.fmt(t.montantUnitaire)),a(2),p(d.salesHasRabais?8:-1),a(2),l(d.fmt(t.montantTotal)),a(2),l(d.fmt(t.montantTotal))}}function _t(o,s){if(o&1&&(n(0,"tr",53)(1,"td"),i(2,"RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)"),e()(),C(3,ht,13,6,"tr",56,T)),o&2){let t=r(2);a(),$("colspan",t.salesHasRabais?9:7),a(2),f(t.invoice==null?null:t.invoice.ristourneDetails)}}function Ct(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Pr\xE9compte (PSA)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice.totalPrecompte)," F")}}function ft(o,s){if(o&1&&(n(0,"div",39)(1,"span"),i(2,"Frais d'enl\xE8vement"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("+ ",t.fmt(t.invoice==null?null:t.invoice.fraisEnlevementTTC)," F")}}function gt(o,s){if(o&1&&(n(0,"div",41)(1,"span"),i(2,"Ristournes (\xE0 r\xE9cup\xE9rer)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.totalRistourne)," F")}}function Tt(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Rabais HT"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabais)," F")}}function St(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Rabais TTC d\xE9duit"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabaisTTC)," F")}}function Pt(o,s){if(o&1&&(n(0,"div",43)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.montantPaye)," F")}}function bt(o,s){if(o&1&&(n(0,"div",44)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.montantDu)," F")}}function It(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,it,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,at,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"CLIENT"),e(),n(16,"div",27),i(17),e(),c(18,ot,2,1,"div",28),e(),n(19,"div",29)(20,"div",30)(21,"span"),i(22,"Date"),e(),n(23,"span"),i(24),e()(),c(25,dt,5,1,"div",30),c(26,lt,5,1,"div",30),c(27,st,5,1,"div",30),e()(),n(28,"table",31)(29,"thead")(30,"tr")(31,"th"),i(32,"Code"),e(),n(33,"th",32),i(34,"D\xE9signation"),e(),n(35,"th",33),i(36,"Qt\xE9"),e(),n(37,"th",33),i(38,"P.U.HT"),e(),n(39,"th",33),i(40,"P.U.TTC"),e(),c(41,rt,4,0),n(42,"th",33),i(43,"Mnt HT"),e(),n(44,"th",33),i(45,"Mnt TTC"),e()()(),n(46,"tbody"),C(47,ct,16,8,"tr",null,T),c(49,vt,5,1),c(50,xt,5,1),c(51,_t,5,1),e()(),n(52,"table",34)(53,"thead")(54,"tr")(55,"th"),i(56,"Total Colis"),e(),n(57,"th"),i(58,"Total PET"),e(),n(59,"th"),i(60,"Total Casier"),e(),n(61,"th"),i(62,"Liq. Nu"),e(),n(63,"th"),i(64,"Consigne (F)"),e(),n(65,"th"),i(66,"D\xE9consigne (F)"),e(),n(67,"th"),i(68,"Qt\xE9 Csgn"),e(),n(69,"th"),i(70,"Qt\xE9 Dcsgn"),e()()(),n(71,"tbody")(72,"tr")(73,"td",33),i(74),e(),n(75,"td",33),i(76),e(),n(77,"td",33),i(78),e(),n(79,"td",33),i(80),e(),n(81,"td",33),i(82),e(),n(83,"td",35),i(84),e(),n(85,"td",33),i(86),e(),n(87,"td",35),i(88),e()()()(),n(89,"div",36)(90,"div",37)(91,"div",38)(92,"span"),i(93,"Total HT"),e(),n(94,"span"),i(95),e()(),n(96,"div",38)(97,"span"),i(98,"TVA (19,25%)"),e(),n(99,"span"),i(100),e()(),c(101,Ct,5,1,"div",38),c(102,ft,5,1,"div",39),n(103,"div",40)(104,"span"),i(105,"Total TTC"),e(),n(106,"span"),i(107),e()(),c(108,gt,5,1,"div",41),c(109,Tt,5,1,"div",38),c(110,St,5,1,"div",38),n(111,"div",42)(112,"span"),i(113,"NET \xC0 PAYER"),e(),n(114,"span"),i(115),e()(),c(116,Pt,5,1,"div",43),c(117,bt,5,1,"div",44),e()(),n(118,"div",45),i(119," Arr\xEAt\xE9 \xE0 la somme de : "),n(120,"strong"),i(121),e()(),n(122,"div",46)(123,"div",47)(124,"div",48),i(125,"Signature du livreur"),e(),u(126,"div",49),e(),n(127,"div",47)(128,"div",48),i(129,"Cachet et signature du client"),e(),u(130,"div",49),e()()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(3),l(t.docTitle),a(2),l(t.invoice==null?null:t.invoice.name),a(6),l(t.invoice==null?null:t.invoice.partnerName),a(),p(t.invoice!=null&&t.invoice.warehouseName?18:-1),a(6),l(t.fmtDate(t.invoice==null?null:t.invoice.date)),a(),p(t.invoice!=null&&t.invoice.dateEcheance?25:-1),a(),p(t.invoice!=null&&t.invoice.salesOrderName?26:-1),a(),p(t.invoice!=null&&t.invoice.notes?27:-1),a(14),p(t.salesHasRabais?41:-1),a(6),f(t.salesLines),a(2),p(t.consigneLines.length?49:-1),a(),p(t.deconsigneLines.length?50:-1),a(),p(!(t.invoice==null||t.invoice.ristourneDetails==null)&&t.invoice.ristourneDetails.length?51:-1),a(23),l(t.fmt(t.totalColis)),a(2),l(t.fmt(t.totalPET)),a(2),l(t.fmt(t.totalCasier)),a(2),l(t.fmt((t.invoice==null?null:t.invoice.totalLiquideNu)??0)),a(2),l(t.fmt(t.consigneMontant)),a(2),v("\u2013 ",t.fmt(t.deconsigneMontant)),a(2),l(t.fmt(t.qteConsigne)),a(2),v("\u2013 ",t.fmt(t.qteDeconsigne)),a(7),v("",t.fmt(t.invoice==null?null:t.invoice.totalHT)," F"),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTVA)," F"),a(),p(t.invoice!=null&&t.invoice.totalPrecompte?101:-1),a(),p(((t.invoice==null?null:t.invoice.fraisEnlevementTTC)??0)>0?102:-1),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTTC)," F"),a(),p(((t.invoice==null?null:t.invoice.totalRistourne)??0)>0?108:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabais)??0)>0?109:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabaisTTC)??0)>0?110:-1),a(5),v("",t.fmt((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))," F"),a(),p(t.invoice!=null&&t.invoice.montantPaye?116:-1),a(),p(t.invoice!=null&&t.invoice.montantDu?117:-1),a(4),l(t.montantEnLettres((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC)))}}function yt(o,s){if(o&1&&(n(0,"div",58),u(1,"img",72),e()),o&2){let t=r(2);a(),w("src",t.companyLogoUrl,O)}}function wt(o,s){if(o&1&&(n(0,"div",60),i(1),e()),o&2){let t=r(2);a(),l(t.companyPhone)}}function Ot(o,s){if(o&1&&(n(0,"div",64)(1,"span"),i(2,"Agent"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice.createdByName||t.invoice.createdBy)}}function $t(o,s){if(o&1&&(n(0,"div",64)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice.notes)}}function Mt(o,s){if(o&1&&(n(0,"div",73),i(1),e(),n(2,"div",74)(3,"span"),i(4),e(),n(5,"span",75),i(6),e()()),o&2){let t=s.$implicit,d=r(2);a(),l(t.description||t.productCode),a(3),k("",d.fmt(t.quantity)," \xD7 ",d.fmt(t.prixUnitaireTTC??t.prixUnitaire)),a(2),v("",d.fmt(t.montantTTC)," F")}}function Lt(o,s){if(o&1&&(n(0,"div",73),i(1),e(),n(2,"div",74)(3,"span"),i(4),e(),n(5,"span"),i(6),e()()),o&2){let t=s.$implicit,d=r(3);a(),l(t.description||t.productCode),a(3),l(d.fmt(t.quantity)),a(2),v("",d.fmt(t.montantTTC)," F")}}function Nt(o,s){if(o&1&&(n(0,"div",76),i(1,"\u2014 Consignes \u2014"),e(),C(2,Lt,7,3,null,null,T)),o&2){let t=r(2);a(2),f(t.consigneLines)}}function At(o,s){if(o&1&&(n(0,"div",73),i(1),e(),n(2,"div",74)(3,"span"),i(4),e(),n(5,"span"),i(6),e()()),o&2){let t=s.$implicit,d=r(3);a(),l(t.description||t.productCode),a(3),l(d.fmt(t.quantity)),a(2),v("-",d.fmt(t.montantTTC)," F")}}function kt(o,s){if(o&1&&(n(0,"div",76),i(1,"\u2014 D\xE9consignes \u2014"),e(),C(2,At,7,3,null,null,T)),o&2){let t=r(2);a(2),f(t.deconsigneLines)}}function Ft(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Total PET"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmt(t.totalPET))}}function Rt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Total Casier"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmt(t.totalCasier))}}function Dt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Liq. Nu"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.totalLiquideNu)," F")}}function Ut(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Consigne"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.consigneMontant)," F")}}function zt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"D\xE9consigne"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.deconsigneMontant)," F")}}function Ht(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"PSA"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice.totalPrecompte)," F")}}function Bt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Frais enl\xE8v."),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("+ ",t.fmt(t.invoice==null?null:t.invoice.fraisEnlevementTTC)," F")}}function Vt(o,s){if(o&1&&(u(0,"div",77),n(1,"div",78),i(2,"RISTOURNES (\xE0 r\xE9cup\xE9rer)"),e(),n(3,"div",79)(4,"span"),i(5,"Total ristournes"),e(),n(6,"span"),i(7),e()(),u(8,"div",77)),o&2){let t=r(2);a(7),v("",t.fmt(t.invoice==null?null:t.invoice.totalRistourne)," F")}}function qt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Rabais HT"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabais)," F")}}function Gt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Rabais TTC"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabaisTTC)," F")}}function jt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice.montantPaye)," F")}}function Qt(o,s){if(o&1&&(n(0,"div",65)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.invoice==null?null:t.invoice.montantDu)," F")}}function Yt(o,s){if(o&1&&(n(0,"div",10),c(1,yt,2,1,"div",58),n(2,"div",59),i(3),e(),c(4,wt,2,1,"div",60),u(5,"div",61),n(6,"div",62),i(7),e(),n(8,"div",63),i(9),e(),u(10,"div",61),n(11,"div",64)(12,"span"),i(13,"Date"),e(),n(14,"span"),i(15),e()(),n(16,"div",64)(17,"span"),i(18,"Client"),e(),n(19,"span"),i(20),e()(),c(21,Ot,5,1,"div",64),c(22,$t,5,1,"div",64),u(23,"div",61),C(24,Mt,7,4,null,null,T),c(26,Nt,4,0),c(27,kt,4,0),u(28,"div",61),n(29,"div",65)(30,"span"),i(31,"Total Colis"),e(),n(32,"span"),i(33),e()(),c(34,Ft,5,1,"div",65),c(35,Rt,5,1,"div",65),c(36,Dt,5,1,"div",65),c(37,Ut,5,1,"div",65),c(38,zt,5,1,"div",65),u(39,"div",61),n(40,"div",65)(41,"span"),i(42,"Total HT"),e(),n(43,"span"),i(44),e()(),n(45,"div",65)(46,"span"),i(47,"TVA 19,25%"),e(),n(48,"span"),i(49),e()(),c(50,Ht,5,1,"div",65),c(51,Bt,5,1,"div",65),n(52,"div",66)(53,"span"),i(54,"Total TTC"),e(),n(55,"span"),i(56),e()(),c(57,Vt,9,1),c(58,qt,5,1,"div",65),c(59,Gt,5,1,"div",65),u(60,"div",61),n(61,"div",67)(62,"span"),i(63,"NET \xC0 PAYER"),e(),n(64,"span"),i(65),e()(),c(66,jt,5,1,"div",65),c(67,Qt,5,1,"div",65),u(68,"div",61),n(69,"div",68),i(70),e(),u(71,"div",61),n(72,"div",69)(73,"span"),i(74,"Caissier"),e(),n(75,"span"),i(76,"Client"),e()(),u(77,"div",70),n(78,"div",71),i(79,"Merci de votre confiance !"),e()()),o&2){let t=r();a(),p(t.companyLogoUrl?1:-1),a(2),l(t.companyName),a(),p(t.companyPhone?4:-1),a(3),l(t.docTitle),a(2),l(t.invoice==null?null:t.invoice.name),a(6),l(t.fmtDate(t.invoice==null?null:t.invoice.date)),a(5),l(t.invoice==null?null:t.invoice.partnerName),a(),p(t.invoice!=null&&t.invoice.createdBy?21:-1),a(),p(t.invoice!=null&&t.invoice.notes?22:-1),a(2),f(t.salesLines),a(2),p(t.consigneLines.length?26:-1),a(),p(t.deconsigneLines.length?27:-1),a(6),l(t.fmt(t.totalColis)),a(),p(t.totalPET>0?34:-1),a(),p(t.totalCasier>0?35:-1),a(),p(((t.invoice==null?null:t.invoice.totalLiquideNu)??0)>0?36:-1),a(),p(t.consigneMontant>0?37:-1),a(),p(t.deconsigneMontant>0?38:-1),a(6),v("",t.fmt(t.invoice==null?null:t.invoice.totalHT)," F"),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTVA)," F"),a(),p(t.invoice!=null&&t.invoice.totalPrecompte?50:-1),a(),p(((t.invoice==null?null:t.invoice.fraisEnlevementTTC)??0)>0?51:-1),a(5),v("",t.fmt(t.invoice==null?null:t.invoice.totalTTC)," F"),a(),p(((t.invoice==null?null:t.invoice.totalRistourne)??0)>0?57:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabais)??0)>0?58:-1),a(),p(((t.invoice==null?null:t.invoice.totalRabaisTTC)??0)>0?59:-1),a(6),v("",t.fmt((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))," F"),a(),p(t.invoice!=null&&t.invoice.montantPaye?66:-1),a(),p(((t.invoice==null?null:t.invoice.montantDu)??0)>0?67:-1),a(3),l(t.montantEnLettres((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC)))}}function Wt(o,s){if(o&1&&u(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,O)}}function Kt(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function Zt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Origine"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.picking==null?null:t.picking.origin)}}function Jt(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.picking==null?null:t.picking.notes)}}function Xt(o,s){if(o&1&&(n(0,"tr")(1,"td",84),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",51),i(10),e(),n(11,"td"),i(12),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.productName),a(2),l(m.fmt(t.qtyDemanded)),a(2),l(m.fmt(t.qtyDone??t.qtyDemanded)),a(2),l(t.uomName)}}function te(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,Wt,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,Kt,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9,"BON DE LIVRAISON"),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"CLIENT / DESTINATAIRE"),e(),n(16,"div",27),i(17),e()(),n(18,"div",29)(19,"div",30)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),c(24,Zt,5,1,"div",30),c(25,Jt,5,1,"div",30),e()(),n(26,"table",31)(27,"thead")(28,"tr")(29,"th",33),i(30,"#"),e(),n(31,"th"),i(32,"Code"),e(),n(33,"th",32),i(34,"D\xE9signation"),e(),n(35,"th",33),i(36,"Qt\xE9 dem."),e(),n(37,"th",33),i(38,"Qt\xE9 livr\xE9e"),e(),n(39,"th"),i(40,"U.M."),e()()(),n(41,"tbody"),C(42,Xt,13,6,"tr",null,T),e(),n(44,"tfoot")(45,"tr")(46,"td",80),i(47,"TOTAL COLIS LIVR\xC9S"),e(),n(48,"td",81),i(49),e(),u(50,"td"),e()()(),n(51,"div",46)(52,"div",47)(53,"div",48),i(54,"Signature du livreur"),e(),n(55,"div",82),i(56,"Nom : ________________________"),e(),u(57,"div",49),e(),n(58,"div",47)(59,"div",48),i(60,"Cachet et signature du client"),e(),n(61,"div",82),i(62,"Nom : ________________________"),e(),u(63,"div",49),e()(),n(64,"div",83),i(65),e()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(5),l(t.picking==null?null:t.picking.name),a(6),l((t.picking==null?null:t.picking.partnerName)||"\u2014"),a(6),l(t.fmtDate(t.picking==null?null:t.picking.scheduledDate)),a(),p(t.picking!=null&&t.picking.origin?24:-1),a(),p(t.picking!=null&&t.picking.notes?25:-1),a(17),f(t.pickingMoves),a(7),l(t.fmt(t.totalPickingQty)),a(16),v("Document non contractuel \xB7 ",t.companyName)}}function ee(o,s){if(o&1&&u(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,O)}}function ne(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function ie(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.dateEcheance))}}function ae(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Commande"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseInvoice==null?null:t.purchaseInvoice.purchaseOrderName)}}function oe(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"R\xE9f."),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseInvoice.notes)}}function de(o,s){if(o&1&&(n(0,"tr")(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",50),i(10),e(),n(11,"td",35),i(12),e(),n(13,"td",52),i(14),e(),n(15,"td",33),i(16),e(),n(17,"td",51),i(18),e()()),o&2){let t=s.$implicit,d=r(2);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(2),l(d.fmt(t.prixUnitaire+(t.rabaisUnitaire??0))),a(2),l(d.fmt((t.prixUnitaire+(t.rabaisUnitaire??0))*(1+(t.tauxTVA??0)/100))),a(2),l((t.rabaisUnitaire??0)>0?"\u2013"+d.fmt(t.rabaisUnitaire):"\u2014"),a(2),l((t.rabaisUnitaire??0)>0?"\u2013"+d.fmt((t.rabaisUnitaire??0)*(1+(t.tauxTVA??0)/100)):"\u2014"),a(2),l(d.fmt(t.montantHT)),a(2),l(d.fmt((t.montantHT??0)+(t.montantTVA??0)+(t.precompte??0)))}}function le(o,s){if(o&1&&(n(0,"tr",54)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),u(7,"td",86)(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(4),l(d.fmt(t.montantTTC))}}function se(o,s){if(o&1&&(n(0,"tr",53)(1,"td",85),i(2,"CONSIGNES"),e()(),C(3,le,11,4,"tr",54,T)),o&2){let t=r(2);a(3),f(t.purchaseConsigneLines)}}function re(o,s){if(o&1&&(n(0,"tr",54)(1,"td"),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",33),i(6),e(),u(7,"td",86)(8,"td"),n(9,"td",33),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(4),l(d.fmt(t.montantTTC))}}function me(o,s){if(o&1&&(n(0,"tr",55)(1,"td",85),i(2,"D\xC9CONSIGNES"),e()(),C(3,re,11,4,"tr",54,T)),o&2){let t=r(2);a(3),f(t.purchaseDeconsigneLines)}}function ce(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Pr\xE9compte (PSA)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalPrecompte)," F")}}function pe(o,s){if(o&1&&(n(0,"div",39)(1,"span"),i(2,"Frais d'enl\xE8vement"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("+ ",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.fraisEnlevementTTC)," F")}}function ve(o,s){if(o&1&&(n(0,"div",41)(1,"span"),i(2,"Rabais HT (601901)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.purchaseTotalRabaisHT)," F")}}function Ee(o,s){if(o&1&&(n(0,"div",38)(1,"span"),i(2,"Rabais TTC d\xE9duit"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.purchaseTotalRabaisTTC)," F")}}function xe(o,s){if(o&1&&(n(0,"div",43)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.montantPaye)," F")}}function ue(o,s){if(o&1&&(n(0,"div",44)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.montantDu)," F")}}function he(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,ee,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,ne,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"FOURNISSEUR"),e(),n(16,"div",27),i(17),e()(),n(18,"div",29)(19,"div",30)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),c(24,ie,5,1,"div",30),c(25,ae,5,1,"div",30),c(26,oe,5,1,"div",30),e()(),n(27,"table",31)(28,"thead")(29,"tr")(30,"th"),i(31,"Code"),e(),n(32,"th",32),i(33,"D\xE9signation"),e(),n(34,"th",33),i(35,"Qt\xE9"),e(),n(36,"th",33),i(37,"P.U.HT"),e(),n(38,"th",33),i(39,"P.U.TTC"),e(),n(40,"th",33),i(41,"Rabais HT/u"),e(),n(42,"th",33),i(43,"Rabais TTC/u"),e(),n(44,"th",33),i(45,"Mnt HT"),e(),n(46,"th",33),i(47,"Mnt TTC"),e()()(),n(48,"tbody"),C(49,de,19,9,"tr",null,T),c(51,se,5,0),c(52,me,5,0),e()(),n(53,"table",34)(54,"thead")(55,"tr")(56,"th"),i(57,"Total Colis"),e(),n(58,"th"),i(59,"Total PET"),e(),n(60,"th"),i(61,"Total Casier"),e(),n(62,"th"),i(63,"Liq. Nu"),e(),n(64,"th"),i(65,"Consigne (F)"),e(),n(66,"th"),i(67,"D\xE9consigne (F)"),e(),n(68,"th"),i(69,"Qt\xE9 Csgn"),e(),n(70,"th"),i(71,"Qt\xE9 Dcsgn"),e()()(),n(72,"tbody")(73,"tr")(74,"td",33),i(75),e(),n(76,"td",33),i(77),e(),n(78,"td",33),i(79,"0"),e(),n(80,"td",33),i(81),e(),n(82,"td",33),i(83),e(),n(84,"td",35),i(85),e(),n(86,"td",33),i(87),e(),n(88,"td",35),i(89),e()()()(),n(90,"div",36)(91,"div",37)(92,"div",38)(93,"span"),i(94,"Total HT"),e(),n(95,"span"),i(96),e()(),n(97,"div",38)(98,"span"),i(99,"TVA (19,25%)"),e(),n(100,"span"),i(101),e()(),c(102,ce,5,1,"div",38),c(103,pe,5,1,"div",39),n(104,"div",40)(105,"span"),i(106,"Total TTC"),e(),n(107,"span"),i(108),e()(),c(109,ve,5,1,"div",41),c(110,Ee,5,1,"div",38),n(111,"div",42)(112,"span"),i(113,"NET \xC0 PAYER"),e(),n(114,"span"),i(115),e()(),c(116,xe,5,1,"div",43),c(117,ue,5,1,"div",44),e()(),n(118,"div",45),i(119," Arr\xEAt\xE9 \xE0 la somme de : "),n(120,"strong"),i(121),e()(),n(122,"div",46)(123,"div",47)(124,"div",48),i(125,"Signature du fournisseur"),e(),u(126,"div",49),e(),n(127,"div",47)(128,"div",48),i(129,"Cachet et signature"),e(),u(130,"div",49),e()()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(3),l(t.docTitle),a(2),l(t.purchaseInvoice==null?null:t.purchaseInvoice.name),a(6),l(t.purchaseInvoice==null?null:t.purchaseInvoice.partnerName),a(6),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.date)),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.dateEcheance?24:-1),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.purchaseOrderName?25:-1),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.notes?26:-1),a(23),f(t.purchaseNormalLines),a(2),p(t.purchaseConsigneLines.length?51:-1),a(),p(t.purchaseDeconsigneLines.length?52:-1),a(23),l(t.fmt(t.purchaseTotalColis)),a(2),l(t.fmt(t.purchaseTotalPET)),a(4),l(t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.totalLiquideNu)??0)),a(2),l(t.fmt(t.purchaseConsigneMontant)),a(2),v("\u2013 ",t.fmt(t.purchaseDeconsigneMontant)),a(2),l(t.fmt(t.purchaseQteConsigne)),a(2),v("\u2013 ",t.fmt(t.purchaseQteDeconsigne)),a(7),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalHT)," F"),a(5),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTVA)," F"),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.totalPrecompte?102:-1),a(),p(((t.purchaseInvoice==null?null:t.purchaseInvoice.fraisEnlevementTTC)??0)>0?103:-1),a(5),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)," F"),a(),p(t.purchaseTotalRabaisHT>0?109:-1),a(),p(t.purchaseTotalRabaisTTC>0?110:-1),a(5),v("",t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC))," F"),a(),p(t.purchaseInvoice!=null&&t.purchaseInvoice.montantPaye?116:-1),a(),p(((t.purchaseInvoice==null?null:t.purchaseInvoice.montantDu)??0)>.01?117:-1),a(4),l(t.montantEnLettres((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)))}}function _e(o,s){if(o&1&&(n(0,"div",58),u(1,"img",72),e()),o&2){let t=r(2);a(),w("src",t.companyLogoUrl,O)}}function Ce(o,s){if(o&1&&(n(0,"div",60),i(1),e()),o&2){let t=r(2);a(),l(t.companyPhone)}}function fe(o,s){if(o&1&&(n(0,"div",73),i(1),e(),n(2,"div",74)(3,"span"),i(4),e(),n(5,"span",75),i(6),e()()),o&2){let t=s.$implicit,d=r(2);a(),l(t.description||t.productCode),a(3),k("",d.fmt(t.quantity)," \xD7 ",d.fmt(t.prixUnitaire)),a(2),v("",d.fmt(t.montantTTC)," F")}}function ge(o,s){if(o&1&&(n(0,"div",10),c(1,_e,2,1,"div",58),n(2,"div",59),i(3),e(),c(4,Ce,2,1,"div",60),u(5,"div",61),n(6,"div",62),i(7),e(),n(8,"div",63),i(9),e(),u(10,"div",61),n(11,"div",64)(12,"span"),i(13,"Date"),e(),n(14,"span"),i(15),e()(),n(16,"div",64)(17,"span"),i(18,"Fournisseur"),e(),n(19,"span"),i(20),e()(),u(21,"div",61),C(22,fe,7,4,null,null,T),u(24,"div",61),n(25,"div",65)(26,"span"),i(27,"Total HT"),e(),n(28,"span"),i(29),e()(),n(30,"div",65)(31,"span"),i(32,"TVA"),e(),n(33,"span"),i(34),e()(),u(35,"div",61),n(36,"div",67)(37,"span"),i(38,"NET \xC0 PAYER"),e(),n(39,"span"),i(40),e()(),u(41,"div",61),n(42,"div",68),i(43),e()()),o&2){let t=r();a(),p(t.companyLogoUrl?1:-1),a(2),l(t.companyName),a(),p(t.companyPhone?4:-1),a(3),l(t.docTitle),a(2),l(t.purchaseInvoice==null?null:t.purchaseInvoice.name),a(6),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.date)),a(5),l(t.purchaseInvoice==null?null:t.purchaseInvoice.partnerName),a(2),f(t.purchaseInvoiceLines),a(7),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalHT)," F"),a(5),v("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTVA)," F"),a(6),v("",t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC))," F"),a(3),l(t.montantEnLettres((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)))}}function Te(o,s){if(o&1&&u(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,O)}}function Se(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function Pe(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Livraison pr\xE9vue"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.dateExpected))}}function be(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseOrder==null?null:t.purchaseOrder.notes)}}function Ie(o,s){if(o&1&&(n(0,"tr")(1,"td",84),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",33),i(10),e(),n(11,"td",33),i(12),e(),n(13,"td",33),i(14),e(),n(15,"td",51),i(16),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.description),a(2),l(m.fmt(t.quantity)),a(2),l(m.fmt(t.prixUnitaire)),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(m.fmt(t.montantHT)),a(2),l(m.fmt(t.montantTTC))}}function ye(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,Te,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,Se,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9,"BON DE COMMANDE"),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"FOURNISSEUR"),e(),n(16,"div",27),i(17),e()(),n(18,"div",29)(19,"div",30)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),c(24,Pe,5,1,"div",30),c(25,be,5,1,"div",30),e()(),n(26,"table",31)(27,"thead")(28,"tr")(29,"th",33),i(30,"#"),e(),n(31,"th"),i(32,"Code"),e(),n(33,"th",32),i(34,"D\xE9signation"),e(),n(35,"th",33),i(36,"Qt\xE9"),e(),n(37,"th",33),i(38,"P.U. HT"),e(),n(39,"th",33),i(40,"TVA"),e(),n(41,"th",33),i(42,"Total HT"),e(),n(43,"th",33),i(44,"Total TTC"),e()()(),n(45,"tbody"),C(46,Ie,17,8,"tr",null,T),e()(),n(48,"div",36)(49,"div",37)(50,"div",38)(51,"span"),i(52,"Total HT"),e(),n(53,"span"),i(54),e()(),n(55,"div",38)(56,"span"),i(57,"Taxes (TVA + PSA)"),e(),n(58,"span"),i(59),e()(),n(60,"div",42)(61,"span"),i(62,"TOTAL TTC"),e(),n(63,"span"),i(64),e()()()(),n(65,"div",45),i(66," Arr\xEAt\xE9 \xE0 la somme de : "),n(67,"strong"),i(68),e()(),n(69,"div",46)(70,"div",47)(71,"div",48),i(72,"Le fournisseur"),e(),n(73,"div",82),i(74,"Nom : ________________________"),e(),u(75,"div",49),e(),n(76,"div",47)(77,"div",48),i(78,"Pour la soci\xE9t\xE9"),e(),n(79,"div",82),i(80,"Nom : ________________________"),e(),u(81,"div",49),e()(),n(82,"div",83),i(83),e()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(5),l(t.purchaseOrder==null?null:t.purchaseOrder.name),a(6),l((t.purchaseOrder==null?null:t.purchaseOrder.partnerName)||"\u2014"),a(6),l(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.date)),a(),p(t.purchaseOrder!=null&&t.purchaseOrder.dateExpected?24:-1),a(),p(t.purchaseOrder!=null&&t.purchaseOrder.notes?25:-1),a(21),f((t.purchaseOrder==null?null:t.purchaseOrder.lines)??z(13,j)),a(8),v("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalHT)," F"),a(5),v("",t.fmt(((t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)??0)-((t.purchaseOrder==null?null:t.purchaseOrder.totalHT)??0))," F"),a(5),v("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)," F"),a(4),l(t.montantEnLettres(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)),a(15),v("Bon de commande soumis \xE0 acceptation \xB7 ",t.companyName)}}function we(o,s){if(o&1&&u(0,"img",18),o&2){let t=r(2);w("src",t.companyLogoUrl,O)}}function Oe(o,s){if(o&1&&(n(0,"div",20),i(1),e()),o&2){let t=r(2);a(),v("T\xE9l : ",t.companyPhone)}}function $e(o,s){if(o&1&&(n(0,"div",28),i(1),e()),o&2){let t=r(2);a(),l(t.salesOrder==null?null:t.salesOrder.warehouseName)}}function Me(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.salesOrder==null?null:t.salesOrder.dateEcheance))}}function Le(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Facture"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.salesOrder==null?null:t.salesOrder.invoiceName)}}function Ne(o,s){if(o&1&&(n(0,"div",30)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.salesOrder==null?null:t.salesOrder.notes)}}function Ae(o,s){if(o&1&&(n(0,"tr")(1,"td",84),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",33),i(8),e(),n(9,"td",33),i(10),e(),n(11,"td",33),i(12),e(),n(13,"td",33),i(14),e(),n(15,"td",33),i(16),e(),n(17,"td",51),i(18),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.description),a(2),l(m.fmt(t.quantity)),a(2),l(m.fmt(t.prixUnitaire)),a(2),l(t.tauxRemise?t.tauxRemise+"%":"\u2014"),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(m.fmt(t.montantHT)),a(2),l(m.fmt(t.montantTTC))}}function ke(o,s){if(o&1&&(n(0,"div",87)(1,"span"),i(2,"Remise totale"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),v("\u2013 ",t.fmt(t.salesOrder==null?null:t.salesOrder.totalRemise)," F")}}function Fe(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17),c(3,we,1,1,"img",18),n(4,"div",19),i(5),e(),c(6,Oe,2,1,"div",20),e(),n(7,"div",21)(8,"div",22),i(9,"BON DE COMMANDE"),e(),n(10,"div",23),i(11),e()()(),n(12,"div",24)(13,"div",25)(14,"div",26),i(15,"CLIENT"),e(),n(16,"div",27),i(17),e(),c(18,$e,2,1,"div",28),e(),n(19,"div",29)(20,"div",30)(21,"span"),i(22,"Date"),e(),n(23,"span"),i(24),e()(),c(25,Me,5,1,"div",30),c(26,Le,5,1,"div",30),c(27,Ne,5,1,"div",30),e()(),n(28,"table",31)(29,"thead")(30,"tr")(31,"th",33),i(32,"#"),e(),n(33,"th"),i(34,"Code"),e(),n(35,"th",32),i(36,"D\xE9signation"),e(),n(37,"th",33),i(38,"Qt\xE9"),e(),n(39,"th",33),i(40,"P.U. HT"),e(),n(41,"th",33),i(42,"Remise"),e(),n(43,"th",33),i(44,"TVA"),e(),n(45,"th",33),i(46,"Mnt HT"),e(),n(47,"th",33),i(48,"Mnt TTC"),e()()(),n(49,"tbody"),C(50,Ae,19,9,"tr",null,T),e()(),n(52,"div",36)(53,"div",37),c(54,ke,5,1,"div",87),n(55,"div",38)(56,"span"),i(57,"Total HT"),e(),n(58,"span"),i(59),e()(),n(60,"div",38)(61,"span"),i(62,"TVA (19,25%)"),e(),n(63,"span"),i(64),e()(),n(65,"div",42)(66,"span"),i(67,"TOTAL TTC"),e(),n(68,"span"),i(69),e()()()(),n(70,"div",45),i(71," Arr\xEAt\xE9 \xE0 la somme de : "),n(72,"strong"),i(73),e()(),n(74,"div",46)(75,"div",47)(76,"div",48),i(77,"Le client"),e(),n(78,"div",82),i(79,"Nom : ________________________"),e(),u(80,"div",49),e(),n(81,"div",47)(82,"div",48),i(83,"Pour la soci\xE9t\xE9"),e(),n(84,"div",82),i(85,"Nom : ________________________"),e(),u(86,"div",49),e()(),n(87,"div",83),i(88),e()()),o&2){let t=r();a(3),p(t.companyLogoUrl?3:-1),a(2),l(t.companyName),a(),p(t.companyPhone?6:-1),a(5),l(t.salesOrder==null?null:t.salesOrder.name),a(6),l((t.salesOrder==null?null:t.salesOrder.partnerName)||"\u2014"),a(),p(t.salesOrder!=null&&t.salesOrder.warehouseName?18:-1),a(6),l(t.fmtDate(t.salesOrder==null?null:t.salesOrder.date)),a(),p(t.salesOrder!=null&&t.salesOrder.dateEcheance?25:-1),a(),p(t.salesOrder!=null&&t.salesOrder.invoiceName?26:-1),a(),p(t.salesOrder!=null&&t.salesOrder.notes?27:-1),a(23),f((t.salesOrder==null?null:t.salesOrder.lines)??z(16,j)),a(4),p(t.salesOrder!=null&&t.salesOrder.totalRemise?54:-1),a(5),v("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalHT)," F"),a(5),v("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTVA)," F"),a(5),v("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTTC)," F"),a(4),l(t.montantEnLettres(t.salesOrder==null?null:t.salesOrder.totalTTC)),a(15),v("Bon de commande \xB7 ",t.companyName)}}var je=(()=>{class o{constructor(){this.invoice=null,this.picking=null,this.purchaseInvoice=null,this.purchaseOrder=null,this.salesOrder=null,this.docType="invoice",this.companyName="",this.companyPhone="",this.companyLogoUrl="",this.companyLogoDataUrl="",this.companyInfo=null,this.closed=new B,this.format="a4",this.printing=!1,this.FORMATS=[{value:"a4",label:"A4",icon:"description"},{value:"a5",label:"A5",icon:"article"},{value:"ticket",label:"Ticket",icon:"receipt"}]}get docTitle(){return this.docType==="bon"?"BON DE LIVRAISON":this.docType==="avoir"?"AVOIR":this.docType==="purchase_order"||this.docType==="sales_order"?"BON DE COMMANDE":this.docType==="purchase_invoice"?this.purchaseInvoice?.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR":"FACTURE"}get docRef(){return this.invoice?.name??this.picking?.name??this.purchaseInvoice?.name??this.purchaseOrder?.name??this.salesOrder?.name??""}get client(){return this.invoice?.partnerName??this.picking?.partnerName??this.purchaseInvoice?.partnerName??this.purchaseOrder?.partnerName??this.salesOrder?.partnerName??""}get allLines(){return this.invoice?.lines??[]}get salesHasRabais(){return(this.invoice?.totalRabais??0)>0||this.salesLines.some(t=>(t.rabaisUnitaire??0)>0)}get salesLines(){return this.allLines.filter(t=>!this.isConsigneLine(t)&&(t.quantity??0)>=0)}get consigneLines(){return this.allLines.filter(t=>this.isConsigneLine(t)&&(t.quantity??0)>=0)}get deconsigneLines(){return this.allLines.filter(t=>(t.quantity??0)<0)}get pickingMoves(){return this.picking?.moves??[]}get totalPickingQty(){return this.pickingMoves.reduce((t,d)=>t+(d.qtyDone??d.qtyDemanded??0),0)}get purchaseInvoiceLines(){return this.purchaseInvoice?.lines??[]}get purchaseInvoiceHasRabais(){return this.purchaseInvoiceLines.some(t=>(t.rabaisUnitaire??0)>0)}get purchaseNormalLines(){return this.purchaseInvoiceLines.filter(t=>!t.consigne&&(t.quantity??0)>=0)}get purchaseConsigneLines(){return this.purchaseInvoiceLines.filter(t=>t.consigne===!0&&(t.quantity??0)>=0)}get purchaseDeconsigneLines(){return this.purchaseInvoiceLines.filter(t=>(t.quantity??0)<0)}get purchaseTotalColis(){return this.purchaseNormalLines.reduce((t,d)=>t+(d.quantity??0),0)}get purchaseTotalPET(){return this.purchaseNormalLines.filter(t=>t.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((t,d)=>t+(d.quantity??0),0)}get purchaseConsigneMontant(){return this.purchaseConsigneLines.reduce((t,d)=>t+(d.montantTTC??0),0)}get purchaseDeconsigneMontant(){return this.purchaseDeconsigneLines.reduce((t,d)=>t+Math.abs(d.montantTTC??0),0)}get purchaseQteConsigne(){return this.purchaseConsigneLines.reduce((t,d)=>t+(d.quantity??0),0)}get purchaseQteDeconsigne(){return this.purchaseDeconsigneLines.reduce((t,d)=>t+Math.abs(d.quantity??0),0)}get purchaseTotalRabaisHT(){return this.purchaseInvoiceLines.reduce((t,d)=>t+(d.totalRabaisLigne??0),0)}get purchaseTotalRabaisTTC(){return this.purchaseInvoiceLines.reduce((t,d)=>{let m=d.totalRabaisLigne??0;return t+m*(1+(d.tauxTVA??0)/100)},0)}get totalColis(){return this.salesLines.reduce((t,d)=>t+(d.quantity??0),0)}get totalPET(){return this.salesLines.filter(t=>t.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((t,d)=>t+(d.quantity??0),0)}get totalCasier(){return this.salesLines.filter(t=>t.uomName?.toLowerCase().includes("casier")).reduce((t,d)=>t+(d.quantity??0),0)}get consigneMontant(){return this.consigneLines.reduce((t,d)=>t+(d.montantTTC??0),0)}get deconsigneMontant(){return this.deconsigneLines.reduce((t,d)=>t+Math.abs(d.montantTTC??0),0)}get qteConsigne(){return this.consigneLines.reduce((t,d)=>t+(d.quantity??0),0)}get qteDeconsigne(){return this.deconsigneLines.reduce((t,d)=>t+Math.abs(d.quantity??0),0)}isConsigneLine(t){return t.consigne===!0||!!t.productCode&&H.has(t.productCode.trim().toUpperCase())}isConsigne(t){return!!t&&H.has(t.trim().toUpperCase())}fmt(t){return t==null?"0":new Intl.NumberFormat("fr-FR",{maximumFractionDigits:0}).format(t)}fmtDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})}catch(d){return t}}montantEnLettres(t){return W(Math.round(t??0))+" Francs CFA"}setFormat(t){this.format=t}close(){this.closed.emit()}print(){this.printing=!0;let t=this.buildFullHtml(),d=window.open("","_blank","width=1000,height=1100");if(!d){this.printing=!1;return}d.document.write(t),d.document.close(),d.focus(),setTimeout(()=>{d.print(),d.onafterprint=()=>{d.close(),this.printing=!1}},600)}buildFullHtml(){let t,d;return this.docType==="bon"?(t=Re,d=this.buildBonBody()):this.docType==="purchase_order"?(t=this.format==="a5"?F:N,d=this.buildPurchaseOrderBody()):this.docType==="sales_order"?(t=this.format==="a5"?F:N,d=this.buildSalesOrderBody()):this.docType==="purchase_invoice"?(t=this.format==="ticket"?G:this.format==="a5"?F:N,d=this.format==="ticket"?this.buildPurchaseInvoiceTicketBody():this.buildPurchaseInvoiceBody(this.format==="a5")):(t=this.format==="ticket"?G:this.format==="a5"?F:N,d=this.format==="ticket"?this.buildTicketBody():this.buildInvoiceBody(this.format==="a5")),`<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>${this.docTitle} ${this.docRef}</title>
<style>${t}</style></head><body>${d}</body></html>`}h(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}logoImgHtml(){return this.companyLogoDataUrl?`<img src="${this.companyLogoDataUrl}" class="co-logo" alt="logo">`:this.companyLogoUrl?`<img src="${this.companyLogoUrl.startsWith("http")?this.companyLogoUrl:`${window.location.origin}${this.companyLogoUrl}`}" class="co-logo" alt="logo">`:""}companyHeaderHtml(){let t=this.companyInfo,d=t?.name||this.companyName||"",m=t?.sigle||"",x=t?.rccm||"",_=t?.nif||"",g=t?.adresse||"",h=t?.telephone||this.companyPhone||"",b=t?.email||"",y=m?` <span class="co-sigle">(${this.h(m)})</span>`:"",E=g?`<div class="co-info">${this.h(g)}</div>`:"",S=x?`<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(x)}</div>`:"",P=_?`<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(_)}</div>`:"",I=h?`<div class="co-info"><span class="co-lbl">T\xE9l :</span> ${this.h(h)}</div>`:"",A=b?`<div class="co-info"><span class="co-lbl">Email :</span> ${this.h(b)}</div>`:"";return`${this.logoImgHtml()}
      <div class="co-name">${this.h(d)}${y}</div>
      ${E}${S}${P}${I}${A}`}ticketCompanyHtml(){let t=this.companyInfo,d=t?.name||this.companyName||"",m=t?.sigle||"",x=t?.rccm||"",_=t?.nif||"",g=t?.telephone||this.companyPhone||"",h=t?.email||"",b=this.logoImgHtml();return`
      ${b?`<div class="t-logo">${b}</div>`:""}
      <div class="t-company">${this.h(d)}${m?` (${this.h(m)})`:""}</div>
      ${x?`<div class="t-coinfo">RCCM : ${this.h(x)}</div>`:""}
      ${_?`<div class="t-coinfo">NIF : ${this.h(_)}</div>`:""}
      ${g?`<div class="t-coinfo">T\xE9l : ${this.h(g)}</div>`:""}
      ${h?`<div class="t-coinfo">Email : ${this.h(h)}</div>`:""}`}buildInvoiceBody(t=!1){let d=this.invoice,m=this.docType==="avoir"?"AVOIR":"FACTURE",x=this.salesHasRabais,_=this.salesLines.map(E=>`
      <tr>
        <td>${this.h(E.productCode)}</td>
        <td class="desc">${this.h(E.description)}</td>
        <td class="r">${this.fmt(E.quantity)}</td>
        <td class="r">${this.fmt(E.prixUnitaire)}</td>
        <td class="r bold-teal">${this.fmt(E.prixUnitaireTTC??0)}</td>
        ${x?`<td class="r rabais">${(E.rabaisUnitaire??0)>0?"\u2013"+this.fmt(E.rabaisUnitaire):"\u2014"}</td>
        <td class="r rabais-ttc">${(E.rabaisUnitaireTTC??0)>0?"\u2013"+this.fmt(E.rabaisUnitaireTTC):"\u2014"}</td>`:""}
        <td class="r">${this.fmt(E.montantHT)}</td>
        <td class="r bold">${this.fmt(E.montantTTC)}</td>
      </tr>`).join(""),g=this.consigneLines.length?`
      <tr class="consigne-header"><td colspan="${x?9:7}">CONSIGNES</td></tr>
      ${this.consigneLines.map(E=>`
        <tr class="consigne-row">
          <td>${this.h(E.productCode)}</td>
          <td class="desc">${this.h(E.description)}</td>
          <td class="r">${this.fmt(E.quantity)}</td>
          <td colspan="${x?4:2}"></td>
          <td></td>
          <td class="r">${this.fmt(E.montantTTC)}</td>
        </tr>`).join("")}`:"",h=this.deconsigneLines.length?`
      <tr class="deconsigne-header"><td colspan="${x?9:7}">D\xC9CONSIGNES</td></tr>
      ${this.deconsigneLines.map(E=>`
        <tr class="consigne-row">
          <td>${this.h(E.productCode)}</td>
          <td class="desc">${this.h(E.description)}</td>
          <td class="r">${this.fmt(Math.abs(E.quantity??0))}</td>
          <td colspan="${x?4:2}"></td>
          <td></td>
          <td class="r">${this.fmt(E.montantTTC)}</td>
        </tr>`).join("")}`:"",b=d.ristourneDetails?.length?`
      <tr class="section-header"><td colspan="${x?9:7}">RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)</td></tr>
      ${d.ristourneDetails.map(E=>`
        <tr class="ristourne-row">
          <td colspan="2">${this.h(E.categoryName)}</td>
          <td class="r">${this.fmt(E.quantite)}</td>
          <td class="r">${this.fmt(E.montantUnitaire)}</td>
          <td></td>
          ${x?"<td></td><td></td>":""}
          <td class="r">${this.fmt(E.montantTotal)}</td>
          <td class="r">${this.fmt(E.montantTotal)}</td>
        </tr>`).join("")}`:"",y=d.netAPayer??(d.totalTTC??0)+(d.fraisEnlevementTTC??0);return`
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
        <th class="r">P.U.TTC</th>${x?'<th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>':""}
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${_}
      ${g}
      ${h}
      ${b}
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
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(y)} F</span></div>
      ${d.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(d.montantPaye)} F</span></div>`:""}
      ${(d.montantDu??0)>.01?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(d.montantDu)} F</span></div>`:""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(y)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du livreur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature du client</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${d.createdBy?"Agent : "+this.h(d.createdBy)+" \xB7 ":""}${this.h(this.companyName)}</div>
</div>`}buildTicketBody(){let t=this.invoice,d=this.docType==="avoir"?"AVOIR":"FACTURE",m=t.netAPayer??(t.totalTTC??0)+(t.fraisEnlevementTTC??0),x=this.salesLines.map(h=>`
      <tr>
        <td class="tname">${this.h(h.description||h.productCode)}</td>
        <td class="r">${this.fmt(h.quantity)}\xD7${this.fmt(h.prixUnitaireTTC??h.prixUnitaire)}</td>
        <td class="r">${this.fmt(h.montantTTC)}</td>
      </tr>`).join(""),_=this.consigneLines.length?`
      <tr class="sep"><td colspan="3">\u2014 Consignes \u2014</td></tr>
      ${this.consigneLines.map(h=>`
        <tr><td class="tname">${this.h(h.description||h.productCode)}</td>
            <td class="r">${this.fmt(h.quantity)}</td>
            <td class="r">${this.fmt(h.montantTTC)}</td>
        </tr>`).join("")}`:"",g=this.deconsigneLines.length?`
      <tr class="sep"><td colspan="3">\u2014 D\xE9consignes \u2014</td></tr>
      ${this.deconsigneLines.map(h=>`
        <tr><td class="tname">${this.h(h.description||h.productCode)}</td>
            <td class="r">${this.fmt(Math.abs(h.quantity??0))}</td>
            <td class="r">-${this.fmt(Math.abs(h.montantTTC??0))}</td>
        </tr>`).join("")}`:"";return`
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${d}</div>
  <div class="t-ref">${this.h(t.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(t.date)}</span></div>
  <div class="t-line"><span>Client</span><span>${this.h(t.partnerName)}</span></div>
  ${t.createdBy?`<div class="t-line"><span>Agent</span><span>${this.h(t.createdByName||t.createdBy)}</span></div>`:""}
  ${t.notes?`<div class="t-line"><span>R\xE9f. client</span><span>${this.h(t.notes)}</span></div>`:""}
  <div class="t-sep"></div>
  <table class="t-lines">
    <tbody>${x}${_}${g}</tbody>
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
  <div class="t-sep"></div>
  <div style="display:flex;justify-content:space-between;font-weight:bold"><span>Caissier</span><span>Client</span></div>
  <div style="height:14mm"></div>
  <div class="t-thanks">Merci de votre confiance !</div>
</div>`}buildPurchaseInvoiceBody(t=!1){let d=this.purchaseInvoice,m=d.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR",x=this.purchaseTotalRabaisHT,_=this.purchaseTotalRabaisTTC,g=this.purchaseNormalLines.map(E=>{let S=E.prixUnitaire??0,P=S*(1+(E.tauxTVA??0)/100),I=E.rabaisUnitaire??0,A=I*(1+(E.tauxTVA??0)/100),K=(E.montantHT??0)+(E.montantTVA??0)+(E.precompte??0);return`
      <tr>
        <td>${this.h(E.productCode)}</td>
        <td class="desc">${this.h(E.description)}</td>
        <td class="r">${this.fmt(E.quantity)}</td>
        <td class="r">${this.fmt(S)}</td>
        <td class="r bold-teal">${this.fmt(P)}</td>
        <td class="r rabais">${I>0?"\u2013"+this.fmt(I):"\u2014"}</td>
        <td class="r rabais-ttc">${A>0?"\u2013"+this.fmt(A):"\u2014"}</td>
        <td class="r">${this.fmt(E.montantHT)}</td>
        <td class="r bold">${this.fmt(Math.round(K))}</td>
      </tr>`}).join(""),h=this.purchaseConsigneLines.length?`
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.purchaseConsigneLines.map(E=>`
        <tr class="consigne-row">
          <td>${this.h(E.productCode)}</td>
          <td class="desc">${this.h(E.description)}</td>
          <td class="r">${this.fmt(E.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(E.montantTTC)}</td>
        </tr>`).join("")}`:"",b=this.purchaseDeconsigneLines.length?`
      <tr class="deconsigne-header"><td colspan="9">D\xC9CONSIGNES</td></tr>
      ${this.purchaseDeconsigneLines.map(E=>`
        <tr class="consigne-row">
          <td>${this.h(E.productCode)}</td>
          <td class="desc">${this.h(E.description)}</td>
          <td class="r">${this.fmt(Math.abs(E.quantity??0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(E.montantTTC)}</td>
        </tr>`).join("")}`:"",y=d.netAPayer??d.totalTTC??0;return`
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
      ${g}
      ${h}
      ${b}
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
      ${x>0?`<div class="tot-row ristourne"><span>Rabais HT (601901)</span><span>\u2013 ${this.fmt(Math.round(x))} F</span></div>`:""}
      ${_>0?`<div class="tot-row rabais"><span>Rabais TTC d\xE9duit</span><span>\u2013 ${this.fmt(Math.round(_))} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(y)} F</span></div>
      ${d.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(d.montantPaye)} F</span></div>`:""}
      ${(d.montantDu??0)>.01?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(d.montantDu)} F</span></div>`:""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(y)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du fournisseur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${d.createdBy?"Agent : "+this.h(d.createdBy)+" \xB7 ":""}${this.h(this.companyName)}</div>
</div>`}buildPurchaseInvoiceTicketBody(){let t=this.purchaseInvoice,d=t.type==="credit_note"?"AVOIR FOURN.":"FACT. FOURN.",m=t.netAPayer??t.totalTTC??0,x=this.purchaseInvoiceLines.map(_=>`
      <tr>
        <td class="tname">${this.h(_.description||_.productCode)}</td>
        <td class="r">${this.fmt(_.quantity)}\xD7${this.fmt(_.prixUnitaire)}</td>
        <td class="r">${this.fmt(_.montantTTC)}</td>
      </tr>`).join("");return`
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${d}</div>
  <div class="t-ref">${this.h(t.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(t.date)}</span></div>
  <div class="t-line"><span>Fournisseur</span><span>${this.h(t.partnerName)}</span></div>
  <div class="t-sep"></div>
  <table class="t-lines"><tbody>${x}</tbody></table>
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(t.totalHT)} F</span></div>
  <div class="t-line"><span>TVA</span><span>${this.fmt(t.totalTVA)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-total"><span>NET \xC0 PAYER</span><span>${this.fmt(m)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(m)}</div>
</div>`}buildPurchaseOrderBody(){let t=this.purchaseOrder,d=(t.lines||[]).map((m,x)=>`
      <tr>
        <td class="r idx">${x+1}</td>
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
</div>`}buildSalesOrderBody(){let t=this.salesOrder,m=(t.lines||[]).filter(x=>x.productId||x.productCode&&x.productCode.trim()).map((x,_)=>`
      <tr>
        <td class="r idx">${_+1}</td>
        <td>${this.h(x.productCode)}</td>
        <td class="desc">${this.h(x.description)}</td>
        <td class="r">${this.fmt(x.quantity)}</td>
        <td class="r">${this.fmt(x.prixUnitaire)}</td>
        ${x.tauxRemise?`<td class="r">${x.tauxRemise}%</td>`:'<td class="r">\u2014</td>'}
        <td class="r">${x.tauxTVA?x.tauxTVA+"%":"\u2014"}</td>
        <td class="r">${this.fmt(x.montantHT)}</td>
        <td class="r bold">${this.fmt(x.montantTTC)}</td>
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
</div>`}buildBonBody(){let t=this.picking,d=this.pickingMoves.map((x,_)=>`
      <tr>
        <td class="r idx">${_+1}</td>
        <td>${this.h(x.productCode)}</td>
        <td class="desc">${this.h(x.productName)}</td>
        <td class="r">${this.fmt(x.qtyDemanded)}</td>
        <td class="r bold">${this.fmt(x.qtyDone??x.qtyDemanded)}</td>
        <td>${this.h(x.uomName)}</td>
      </tr>`).join(""),m=this.pickingMoves.reduce((x,_)=>x+(_.qtyDone??_.qtyDemanded??0),0);return`
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
</div>`}static{this.\u0275fac=function(d){return new(d||o)}}static{this.\u0275cmp=V({type:o,selectors:[["app-print-preview"]],inputs:{invoice:"invoice",picking:"picking",purchaseInvoice:"purchaseInvoice",purchaseOrder:"purchaseOrder",salesOrder:"salesOrder",docType:"docType",companyName:"companyName",companyPhone:"companyPhone",companyLogoUrl:"companyLogoUrl",companyLogoDataUrl:"companyLogoDataUrl",companyInfo:"companyInfo"},outputs:{closed:"closed"},decls:33,vars:22,consts:[["(click).self","close()",1,"pp-overlay"],[1,"pp-modal"],[1,"pp-header"],[1,"pp-header-left"],[1,"material-icons"],[1,"pp-close",3,"click"],[1,"pp-formats"],[1,"pp-body"],[1,"preview-page"],[1,"inv-doc"],[1,"tkt"],[1,"pp-footer"],[1,"pp-btn-cancel",3,"click"],[1,"pp-btn-print",3,"click","disabled"],[1,"fmt-btn",3,"active"],[1,"fmt-btn",3,"click"],[1,"inv-header"],[1,"inv-company"],["alt","logo",1,"inv-co-logo",3,"src"],[1,"inv-co-name"],[1,"inv-co-sub"],[1,"inv-title-block"],[1,"inv-doctype"],[1,"inv-ref"],[1,"inv-meta"],[1,"inv-meta-client"],[1,"inv-meta-lbl"],[1,"inv-meta-val"],[1,"inv-meta-sub"],[1,"inv-meta-dates"],[1,"inv-mrow"],[1,"inv-lines"],[1,"tdesc"],[1,"tr"],[1,"inv-recap"],[1,"tr","trabais"],[1,"inv-totals-wrap"],[1,"inv-totals"],[1,"inv-trow"],[1,"inv-trow","inv-enlevement"],[1,"inv-trow","inv-grand"],[1,"inv-trow","inv-ristourne"],[1,"inv-trow","inv-net"],[1,"inv-trow","inv-paid"],[1,"inv-trow","inv-due"],[1,"inv-lettres"],[1,"inv-sigs"],[1,"inv-sig"],[1,"inv-sig-lbl"],[1,"inv-sig-area"],[1,"tr","tbold-teal"],[1,"tr","tbold"],[1,"tr","trabais-ttc"],[1,"inv-section-hdr"],[1,"inv-consigne"],[1,"inv-section-hdr","inv-decons-hdr"],[1,"inv-rst"],["colspan","2"],[1,"tkt-logo"],[1,"tkt-co"],[1,"tkt-phone"],[1,"tkt-sep"],[1,"tkt-type"],[1,"tkt-ref"],[1,"tkt-row"],[1,"tkt-row","sm"],[1,"tkt-row","tkt-subtotal"],[1,"tkt-total"],[1,"tkt-lettres"],[2,"display","flex","justify-content","space-between","font-weight","600"],[2,"height","14mm"],[1,"tkt-thanks"],["alt","logo",3,"src"],[1,"tkt-prod-name"],[1,"tkt-prod-row"],[1,"tbold"],[1,"tkt-sep-label"],[1,"tkt-sep-dots"],[1,"tkt-ristourne-hdr"],[1,"tkt-row","tkt-ristourne-tot"],["colspan","4",1,"tr","inv-total-lbl"],[1,"tr","inv-total-val"],[1,"inv-sig-name"],[1,"inv-footer-note"],[1,"tr","tgray"],["colspan","9"],["colspan","4"],[1,"inv-trow","inv-deduct"]],template:function(d,m){d&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),i(5,"print"),e(),n(6,"span"),i(7,"Aper\xE7u avant impression \u2014 "),n(8,"strong"),i(9),e()()(),n(10,"button",5),M("click",function(){return m.close()}),n(11,"span",4),i(12,"close"),e()()(),c(13,X,3,0,"div",6),c(14,nt,3,0,"div",6),n(15,"div",7)(16,"div",8),c(17,It,131,35,"div",9),c(18,Yt,80,29,"div",10),c(19,te,66,10,"div",9),c(20,he,131,30,"div",9),c(21,ge,44,11,"div",10),c(22,ye,84,14,"div",9),c(23,Fe,89,17,"div",9),e()(),n(24,"div",11)(25,"button",12),M("click",function(){return m.close()}),n(26,"span",4),i(27,"close"),e(),i(28," Fermer "),e(),n(29,"button",13),M("click",function(){return m.print()}),n(30,"span",4),i(31),e(),i(32),e()()()()),d&2&&(a(9),k("",m.docTitle," ",m.docRef),a(4),p(m.docType!=="bon"&&m.docType!=="purchase_order"&&m.docType!=="sales_order"?13:-1),a(),p(m.docType==="purchase_order"||m.docType==="sales_order"?14:-1),a(),L("ticket-mode",m.format==="ticket"),a(),L("page-a4",m.format==="a4")("page-a5",m.format==="a5")("page-ticket",m.format==="ticket"),a(),p((m.docType==="invoice"||m.docType==="avoir")&&m.format!=="ticket"?17:-1),a(),p((m.docType==="invoice"||m.docType==="avoir")&&m.format==="ticket"?18:-1),a(),p(m.docType==="bon"?19:-1),a(),p(m.docType==="purchase_invoice"&&m.format!=="ticket"?20:-1),a(),p(m.docType==="purchase_invoice"&&m.format==="ticket"?21:-1),a(),p(m.docType==="purchase_order"?22:-1),a(),p(m.docType==="sales_order"?23:-1),a(6),w("disabled",m.printing),a(2),l(m.printing?"hourglass_empty":"print"),a(),v(" ",m.printing?"G\xE9n\xE9ration...":"Imprimer"," "))},dependencies:[q],styles:[".pp-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000a6;display:flex;align-items:flex-start;justify-content:center;z-index:9999;padding:20px;overflow-y:auto}.pp-modal[_ngcontent-%COMP%]{background:var(--bg-surface);border-radius:10px;width:100%;max-width:min(1040px,98vw);display:flex;flex-direction:column;max-height:calc(100vh - 40px);box-shadow:0 20px 60px #0006}.pp-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--border);background:var(--bg-hover);border-radius:10px 10px 0 0}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:14px;color:var(--text-primary)}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:var(--accent);font-size:20px}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent)}.pp-close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;color:var(--text-muted);display:flex;align-items:center;border-radius:50%;padding:4px;transition:all .15s}.pp-close[_ngcontent-%COMP%]:hover{background:var(--bg-elevated);color:var(--text-primary)}.pp-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px}.pp-formats[_ngcontent-%COMP%]{display:flex;gap:8px;padding:12px 20px;border-bottom:1px solid var(--border-light);background:var(--bg-surface)}.fmt-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border:1px solid var(--border);border-radius:20px;background:var(--bg-surface);color:var(--text-secondary);font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.fmt-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:15px}.fmt-btn[_ngcontent-%COMP%]:hover{background:var(--bg-hover);border-color:var(--accent)}.fmt-btn.active[_ngcontent-%COMP%]{background:var(--accent);color:#fff;border-color:var(--accent)}.pp-body[_ngcontent-%COMP%]{flex:1;overflow:auto;background:var(--bg-elevated);padding:24px;display:flex;justify-content:flex-start;align-items:flex-start;min-height:420px}.pp-body.ticket-mode[_ngcontent-%COMP%]{padding-top:24px}@media(max-width:640px){.pp-body[_ngcontent-%COMP%]{padding:12px}}.preview-page[_ngcontent-%COMP%]{margin:0 auto;flex-shrink:0;box-shadow:0 4px 24px #00000038;--accent: #059669;--accent-light: #D1FAE5;--success: #16A34A;--danger: #DC2626;--bg-surface: #FFFFFF;--bg-elevated: #F8FAFC;--bg-hover: #F1F5F9;--text-primary: #0F172A;--text-secondary: #475569;--text-muted: #64748B;--border: #E2E8F0;--border-light: #F1F5F9;background:#fff;color:var(--text-primary)}.preview-page.page-a4[_ngcontent-%COMP%]{width:210mm;min-height:297mm}.preview-page.page-a5[_ngcontent-%COMP%]{width:148mm;min-height:210mm}.preview-page.page-ticket[_ngcontent-%COMP%]{width:80mm;min-height:120mm;zoom:1.25}.page-a5[_ngcontent-%COMP%]   .inv-doc[_ngcontent-%COMP%]{padding:8mm;font-size:7.5pt}.page-a5[_ngcontent-%COMP%]   table.inv-lines[_ngcontent-%COMP%]{font-size:7pt}.page-a5[_ngcontent-%COMP%]   table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:6.5pt;padding:3px}.page-a5[_ngcontent-%COMP%]   table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:2px 3px}.page-a5[_ngcontent-%COMP%]   .inv-co-name[_ngcontent-%COMP%]{font-size:12pt}.page-a5[_ngcontent-%COMP%]   .inv-doctype[_ngcontent-%COMP%]{font-size:14pt}.page-a5[_ngcontent-%COMP%]   .inv-meta-val[_ngcontent-%COMP%]{font-size:10pt}.page-a5[_ngcontent-%COMP%]   .inv-trow[_ngcontent-%COMP%]{font-size:7.5pt}.page-a5[_ngcontent-%COMP%]   .inv-totals[_ngcontent-%COMP%]{width:60mm}.inv-doc[_ngcontent-%COMP%]{padding:14mm;font-family:Arial,sans-serif;font-size:9pt;color:var(--text-primary)}.inv-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #222;padding-bottom:4mm;margin-bottom:8mm}.inv-co-logo[_ngcontent-%COMP%]{max-height:48px;max-width:120px;object-fit:contain;display:block;margin-bottom:4px}.inv-co-name[_ngcontent-%COMP%]{font-size:15pt;font-weight:700;color:var(--accent)}.inv-co-sub[_ngcontent-%COMP%]{font-size:9pt;color:var(--text-secondary);margin-top:2px}.inv-title-block[_ngcontent-%COMP%]{text-align:right}.inv-doctype[_ngcontent-%COMP%]{font-size:18pt;font-weight:800;letter-spacing:1px}.inv-ref[_ngcontent-%COMP%]{font-size:11pt;font-weight:600;color:var(--accent);margin-top:2px}.inv-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:8mm}.inv-meta-lbl[_ngcontent-%COMP%]{font-size:7pt;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:2px}.inv-meta-val[_ngcontent-%COMP%]{font-size:12pt;font-weight:700}.inv-meta-sub[_ngcontent-%COMP%]{font-size:8pt;color:var(--text-secondary)}.inv-meta-dates[_ngcontent-%COMP%]{text-align:right}.inv-mrow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;font-size:9pt;margin-bottom:2px}.inv-mrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:var(--text-muted);font-size:8pt}table.inv-lines[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:6mm;font-size:8.5pt}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:var(--accent);color:#fff}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px 6px;text-align:left;font-weight:600;font-size:7.5pt}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:var(--bg-elevated)}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px 6px;border-bottom:1px solid #e8e8e8}table.inv-lines[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:2px solid var(--accent);padding:4px 6px;background:var(--bg-elevated)}.tdesc[_ngcontent-%COMP%]{max-width:110px;word-break:break-word}.tr[_ngcontent-%COMP%]{text-align:right}.tbold[_ngcontent-%COMP%]{font-weight:700}.tbold-teal[_ngcontent-%COMP%]{font-weight:700;color:var(--accent)}.trabais[_ngcontent-%COMP%]{color:#e65100;font-weight:600}.trabais-ttc[_ngcontent-%COMP%]{color:#c0392b;font-weight:700}.tgray[_ngcontent-%COMP%]{color:var(--text-muted);font-size:7.5pt}.inv-section-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:var(--accent-light);font-size:7pt;font-weight:700;color:var(--accent);text-transform:uppercase;padding:3px 6px}.inv-decons-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#fff3e0;color:#e67e22}.inv-consigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .inv-rst[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:var(--bg-hover);color:var(--text-secondary);font-size:8pt}.inv-red[_ngcontent-%COMP%]{color:var(--danger)}.inv-recap[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:6px;font-size:7.5pt}.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:var(--accent-light)}.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:3px 5px;font-weight:700;color:var(--accent);text-align:right;border:1px solid #cde;font-size:7pt}.inv-recap[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px 5px;border:1px solid #e0e0e0;background:#fafafa;font-weight:600}.inv-totals-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:5mm}.inv-totals[_ngcontent-%COMP%]{width:72mm}.inv-trow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:2px 6px;font-size:9pt;border-bottom:1px solid #eee}.inv-grand[_ngcontent-%COMP%]{font-weight:700;background:var(--bg-elevated)}.inv-net[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;background:var(--accent);color:#fff;padding:4px 6px}.inv-deduct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--danger)}.inv-ristourne[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.inv-enlevement[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:#c60;font-weight:600}.inv-paid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.inv-due[_ngcontent-%COMP%]{font-weight:700;color:var(--danger)}.inv-total-lbl[_ngcontent-%COMP%]{font-size:8.5pt;font-weight:700}.inv-total-val[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;color:var(--accent)}.inv-lettres[_ngcontent-%COMP%]{font-size:8.5pt;font-style:italic;border-top:1px solid var(--border);padding-top:3mm;margin-bottom:8mm}.inv-sigs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10mm;margin-top:8mm}.inv-sig[_ngcontent-%COMP%]{flex:1}.inv-sig-lbl[_ngcontent-%COMP%]{font-size:8pt;font-weight:700;margin-bottom:2mm}.inv-sig-name[_ngcontent-%COMP%]{font-size:8pt;color:var(--text-secondary);margin-bottom:2mm}.inv-sig-area[_ngcontent-%COMP%]{height:20mm;border:1px solid #aaa;border-radius:2px}.inv-footer-note[_ngcontent-%COMP%]{font-size:7pt;color:var(--text-muted);text-align:center;margin-top:6mm;border-top:1px solid #eee;padding-top:2mm}.tkt[_ngcontent-%COMP%]{width:80mm;padding:3mm 4mm;font-family:Courier New,monospace;font-size:8pt;font-weight:700}.tkt-logo[_ngcontent-%COMP%]{text-align:center;margin-bottom:2mm}.tkt-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:32px;max-width:60mm;object-fit:contain}.tkt-co[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;text-align:center;margin-bottom:1mm}.tkt-phone[_ngcontent-%COMP%]{font-size:7.5pt;text-align:center;color:var(--text-secondary);margin-bottom:2mm}.tkt-sep[_ngcontent-%COMP%]{border-top:1px dashed #666;margin:2mm 0}.tkt-type[_ngcontent-%COMP%]{font-size:12pt;font-weight:800;text-align:center;letter-spacing:2px;margin:1mm 0}.tkt-ref[_ngcontent-%COMP%]{font-size:9pt;font-weight:700;text-align:center;color:var(--text-primary);margin-bottom:2mm}.tkt-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:8pt;margin:1px 0}.tkt-row.sm[_ngcontent-%COMP%]{font-size:7.5pt;color:var(--text-secondary)}.tkt-prod-name[_ngcontent-%COMP%]{font-size:7.5pt;margin-top:1mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tkt-prod-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:7.5pt;margin-bottom:1mm;padding-left:2mm}.tkt-sep-label[_ngcontent-%COMP%]{text-align:center;font-size:7pt;color:var(--text-muted);padding:1mm 0}.tkt-sep-dots[_ngcontent-%COMP%]{border-top:1px dotted #666;margin:2mm 0}.tkt-subtotal[_ngcontent-%COMP%]{font-weight:700;border-top:1px solid #333;padding-top:1px}.tkt-ristourne-hdr[_ngcontent-%COMP%]{font-size:7pt;font-weight:800;text-align:center;color:var(--success);padding:2px 0;text-transform:uppercase;letter-spacing:1px}.tkt-ristourne-tot[_ngcontent-%COMP%]{font-weight:700}.tkt-ristourne-tot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.tkt-sig-box[_ngcontent-%COMP%]{width:100%;margin-top:2mm}.tkt-sig-lbl[_ngcontent-%COMP%]{font-size:7.5pt;font-weight:700;margin-bottom:1mm;text-align:center}.tkt-sig-name[_ngcontent-%COMP%]{font-size:7pt;color:var(--text-muted);margin-bottom:1mm}.tkt-sig-area[_ngcontent-%COMP%]{height:18mm;border:1px solid #999;border-radius:2px;width:100%}.tkt-total[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:11pt;font-weight:800;border-top:2px solid #111;border-bottom:2px solid #111;padding:1mm 0;margin:2mm 0}.tkt-lettres[_ngcontent-%COMP%]{font-size:6.5pt;font-style:italic;text-align:center;margin:2mm 0;color:var(--text-secondary)}.tkt-thanks[_ngcontent-%COMP%]{font-size:8.5pt;text-align:center;font-weight:700;margin:2mm 0}.tkt-sig[_ngcontent-%COMP%]{font-size:8pt;text-align:center;margin-top:4mm}.tkt[_ngcontent-%COMP%], .tkt[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-weight:800!important;color:#000!important}.pp-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:14px 20px;border-top:1px solid var(--border);background:var(--bg-hover);border-radius:0 0 10px 10px}.pp-btn-cancel[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border:1px solid var(--border);border-radius:6px;background:var(--bg-surface);color:var(--text-secondary);font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-cancel[_ngcontent-%COMP%]:hover{background:var(--bg-hover)}.pp-btn-print[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 20px;background:var(--accent);color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-print[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--accent)}.pp-btn-print[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}"]})}}return o})(),Y=`
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
`,N=Y+`
body { font-size: 9pt; }
@page { size: A4 portrait; }
`,F=Y+`
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
`,G=`
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
/* Ticket enti\xE8rement en gras et en noir : les gris et graisses fines ressortent p\xE2les sur imprimante thermique. */
.ticket, .ticket * { font-weight: 800 !important; color: #000 !important; }
@page { size: 80mm auto; margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`,Re=N;function W(o){if(o===0)return"Z\xE9ro";if(o<0)return"Moins "+W(-o);let s=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"],t=["","","vingt","trente","quarante","cinquante","soixante","soixante","quatre-vingt","quatre-vingt"];function d(E){if(E<20)return s[E];let S=Math.floor(E/10),P=E%10;if(S===7)return"soixante-"+(P===1?"et-onze":s[10+P]);if(S===9)return"quatre-vingt-"+(P===0?"":s[P]).replace(/^-/,"");let I=t[S];return P===0?I+(S===8?"s":""):P===1&&S!==8?I+"-et-un":I+"-"+s[P]}function m(E){if(E<100)return d(E);let S=Math.floor(E/100),P=E%100,I=S===1?"cent":d(S)+" cent";return P===0?I+(S>1?"s":""):I+" "+d(P)}let x=[],_=Math.floor(o/1e9);o%=1e9;let g=Math.floor(o/1e6);o%=1e6;let h=Math.floor(o/1e3);o%=1e3;let b=o;_&&x.push(m(_)+(_===1?" milliard":" milliards")),g&&x.push(m(g)+(g===1?" million":" millions")),h&&x.push(h===1?"mille":m(h)+" mille"),b&&x.push(m(b));let y=x.join(" ").trim().replace(/\s+/g," ");return y.charAt(0).toUpperCase()+y.slice(1)}export{Z as a,H as b,je as c};
