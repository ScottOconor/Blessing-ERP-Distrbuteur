import{c as X}from"./chunk-C7N26F4T.js";import{Ab as V,Ba as o,Ja as W,Na as K,Nb as q,R as z,S as D,Wa as N,X as Q,Ya as h,Za as E,_a as O,ab as S,bb as $,gb as n,hb as e,ib as _,lb as H,mb as I,ob as M,pb as p,rc as J,tb as Z,vb as F,wa as Y,xa as R,xb as i,yb as r,zb as u}from"./chunk-L47SJRLF.js";var ct={CB12:"CASIER BOUTEILLE 12",CB24:"CASIER BOUTEILLE 24",CB12M:"CASIER BOUTEILLE 12 (METAL)",CB24M:"CASIER BOUTEILLE 24 (METAL)",CV12:"CASIER VERRE 12",CV24:"CASIER VERRE 24",CBG12:"CASIER BOUTEILLE GUINNESS 12",CBG15:"CASIER BOUTEILLE GUINNESS 15",CBG24:"CASIER BOUTEILLE GUINNESS 24",CBG12M:"CASIER BOUTEILLE GUINNESS METAL 12",CBG15M:"CASIER BOUTEILLE GUINNESS METAL 15",CBG24M:"CASIER BOUTEILLE GUINNESS METAL 24",CVG12:"CASIER VERRE GUINNESS 12",CVG15:"CASIER VERRE GUINNESS 15",CVG24:"CASIER VERRE GUINNESS 24",VIP12:"VIP 12",VIP24:"VIP 24",VCP12:"VCP 12",VCP24:"VCP 24",VIPG12:"VIP GUINNESS 12",VIPG15:"VIP GUINNESS 15",VIPG24:"VIP GUINNESS 24",EGUI12:"EMBALLAGE GUINNESS 12",EGUI15:"EMBALLAGE GUINNESS 15",EGUI24:"EMBALLAGE GUINNESS 24",PP:"PALETTE PLASTIQUE",PB:"PALETTE BOIS",TT:"TONNELET",BPM:"BOUTEILLE PET METAL",BGM:"BOUTEILLE GUINNESS METAL",B12:"BOUTEILLE GRAND MODELE",B120:"BOUTEILLE VIDE 120",B150:"BOUTEILLE VIDE 150",B75:"BOUTEILLE VIDE 75",BV12:"BOUTEILLE VIDE DE 12",CAIMET:"CAISSE METALLIQUE",CONS001:"CONSIGNE DIVERSE",INPN33:"EMBALLAGE INPN 33",EMB1:"EMBALLAGE 1",EMB2:"EMBALLAGE 2",EMB3:"EMBALLAGE 3",EMB4:"EMBALLAGE 4",EMB5:"EMBALLAGE 5",CAISMB:"CAISSE METAL BOUTEILLE","PALT-V":"PALETTE VERRE",PALTPL:"PALETTE PLASTIQUE (PL)",PRC01:"PORTE-CASIER 01",ELV01:"ELEVATEUR 01"},G=new Set(Object.keys(ct));var et=()=>[],nt=(s,c)=>c.value;function mt(s,c){if(s&1){let t=H();n(0,"button",17),M("click",function(){let d=z(t).$implicit,l=p(2);return D(l.setFormat(d.value))}),n(1,"span",5),i(2),e(),i(3),e()}if(s&2){let t=c.$implicit,a=p(2);F("active",a.format===t.value),o(2),r(t.icon),o(),u(" ",t.label," ")}}function pt(s,c){if(s&1&&(n(0,"div",7),S(1,mt,4,4,"button",16,nt),e()),s&2){let t=p();o(),$(t.FORMATS)}}function vt(s,c){if(s&1){let t=H();n(0,"button",17),M("click",function(){z(t);let d=p().$implicit,l=p(2);return D(l.setFormat(d.value))}),n(1,"span",5),i(2),e(),i(3),e()}if(s&2){let t=p().$implicit,a=p(2);F("active",a.format===t.value),o(2),r(t.icon),o(),u(" ",t.label," ")}}function ht(s,c){if(s&1&&h(0,vt,4,4,"button",16),s&2){let t=c.$implicit;E(t.value!=="ticket"?0:-1)}}function Et(s,c){if(s&1&&(n(0,"div",7),S(1,ht,1,1,null,null,nt),e()),s&2){let t=p();o(),$(t.FORMATS)}}function ut(s,c){if(s&1&&_(0,"img",20),s&2){let t=p(2);I("src",t.companyLogoUrl,R)}}function gt(s,c){if(s&1&&(n(0,"div",22),i(1),e()),s&2){let t=p(2);o(),u("T\xE9l : ",t.companyPhone)}}function xt(s,c){if(s&1&&(n(0,"div",30),i(1),e()),s&2){let t=p(2);o(),u("Entrep\xF4t : ",t.invoice==null?null:t.invoice.warehouseName)}}function ft(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.fmtDate(t.invoice==null?null:t.invoice.dateEcheance))}}function _t(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"Commande"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.invoice==null?null:t.invoice.salesOrderName)}}function Ct(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.invoice.notes)}}function Tt(s,c){s&1&&(n(0,"th",35),i(1,"Rabais HT/u"),e(),n(2,"th",35),i(3,"Rabais TTC/u"),e())}function bt(s,c){if(s&1&&(n(0,"td",37),i(1),e(),n(2,"td",54),i(3),e()),s&2){let t=p().$implicit,a=p(2);o(),r((t.rabaisUnitaire??0)>0?"\u2013"+a.fmt(t.rabaisUnitaire):"\u2014"),o(2),r((t.rabaisUnitaireTTC??0)>0?"\u2013"+a.fmt(t.rabaisUnitaireTTC):"\u2014")}}function Pt(s,c){if(s&1&&(n(0,"tr")(1,"td"),i(2),e(),n(3,"td",34),i(4),e(),n(5,"td",35),i(6),e(),n(7,"td",35),i(8),e(),n(9,"td",52),i(10),e(),h(11,bt,4,2),n(12,"td",35),i(13),e(),n(14,"td",53),i(15),e()()),s&2){let t=c.$implicit,a=p(2);o(2),r(t.productCode),o(2),r(t.description),o(2),r(a.fmt(t.quantity)),o(2),r(a.fmt(t.prixUnitaire)),o(2),r(a.fmt(t.prixUnitaireTTC??0)),o(),E(a.salesHasRabais?11:-1),o(2),r(a.fmt(t.montantHT)),o(2),r(a.fmt(t.montantTTC))}}function yt(s,c){if(s&1&&(n(0,"tr",56)(1,"td"),i(2),e(),n(3,"td",34),i(4),e(),n(5,"td",35),i(6),e(),_(7,"td")(8,"td"),n(9,"td",35),i(10),e()()),s&2){let t=c.$implicit,a=p(3);o(2),r(t.productCode),o(2),r(t.description),o(2),r(a.fmt(t.quantity)),o(),N("colspan",a.salesHasRabais?4:2),o(3),r(a.fmt(t.montantTTC))}}function St(s,c){if(s&1&&(n(0,"tr",55)(1,"td"),i(2,"CONSIGNES"),e()(),S(3,yt,11,5,"tr",56,O)),s&2){let t=p(2);o(),N("colspan",t.salesHasRabais?9:7),o(2),$(t.consigneLines)}}function $t(s,c){if(s&1&&(n(0,"tr",56)(1,"td"),i(2),e(),n(3,"td",34),i(4),e(),n(5,"td",35),i(6),e(),_(7,"td")(8,"td"),n(9,"td",35),i(10),e()()),s&2){let t=c.$implicit,a=p(3);o(2),r(t.productCode),o(2),r(t.description),o(2),r(a.fmt(t.quantity)),o(),N("colspan",a.salesHasRabais?4:2),o(3),r(a.fmt(t.montantTTC))}}function Ot(s,c){if(s&1&&(n(0,"tr",57)(1,"td"),i(2,"D\xC9CONSIGNES"),e()(),S(3,$t,11,5,"tr",56,O)),s&2){let t=p(2);o(),N("colspan",t.salesHasRabais?9:7),o(2),$(t.deconsigneLines)}}function wt(s,c){s&1&&_(0,"td")(1,"td")}function It(s,c){if(s&1&&(n(0,"tr",58)(1,"td",59),i(2),e(),n(3,"td",35),i(4),e(),n(5,"td",35),i(6),e(),_(7,"td"),h(8,wt,2,0),n(9,"td",35),i(10),e(),n(11,"td",35),i(12),e()()),s&2){let t=c.$implicit,a=p(3);o(2),r(t.categoryName),o(2),r(a.fmt(t.quantite)),o(2),r(a.fmt(t.montantUnitaire)),o(2),E(a.salesHasRabais?8:-1),o(2),r(a.fmt(t.montantTotal)),o(2),r(a.fmt(t.montantTotal))}}function Mt(s,c){if(s&1&&(n(0,"tr",55)(1,"td"),i(2,"RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)"),e()(),S(3,It,13,6,"tr",58,O)),s&2){let t=p(2);o(),N("colspan",t.salesHasRabais?9:7),o(2),$(t.invoice==null?null:t.invoice.ristourneDetails)}}function Lt(s,c){if(s&1&&(n(0,"div",40)(1,"span"),i(2,"Pr\xE9compte (PSA)"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("",t.fmt(t.invoice.totalPrecompte)," F")}}function Nt(s,c){if(s&1&&(n(0,"div",41)(1,"span"),i(2,"Frais d'enl\xE8vement"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("+ ",t.fmt(t.invoice==null?null:t.invoice.fraisEnlevementTTC)," F")}}function kt(s,c){if(s&1&&(n(0,"div",43)(1,"span"),i(2,"Ristournes (\xE0 r\xE9cup\xE9rer)"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("",t.fmt(t.invoice==null?null:t.invoice.totalRistourne)," F")}}function At(s,c){if(s&1&&(n(0,"div",40)(1,"span"),i(2,"Rabais HT"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabais)," F")}}function Rt(s,c){if(s&1&&(n(0,"div",40)(1,"span"),i(2,"Rabais TTC d\xE9duit"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("- ",t.fmt(t.invoice==null?null:t.invoice.totalRabaisTTC)," F")}}function Ft(s,c){if(s&1&&(n(0,"div",45)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("",t.fmt(t.invoice==null?null:t.invoice.montantPaye)," F")}}function Ut(s,c){if(s&1&&(n(0,"div",46)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("",t.fmt(t.invoice==null?null:t.invoice.montantDu)," F")}}function zt(s,c){if(s&1&&(n(0,"div",10)(1,"div",18)(2,"div",19),h(3,ut,1,1,"img",20),n(4,"div",21),i(5),e(),h(6,gt,2,1,"div",22),e(),n(7,"div",23)(8,"div",24),i(9),e(),n(10,"div",25),i(11),e()()(),n(12,"div",26)(13,"div",27)(14,"div",28),i(15,"CLIENT"),e(),n(16,"div",29),i(17),e(),h(18,xt,2,1,"div",30),e(),n(19,"div",31)(20,"div",32)(21,"span"),i(22,"Date"),e(),n(23,"span"),i(24),e()(),h(25,ft,5,1,"div",32),h(26,_t,5,1,"div",32),h(27,Ct,5,1,"div",32),e()(),n(28,"table",33)(29,"thead")(30,"tr")(31,"th"),i(32,"Code"),e(),n(33,"th",34),i(34,"D\xE9signation"),e(),n(35,"th",35),i(36,"Qt\xE9"),e(),n(37,"th",35),i(38,"P.U.HT"),e(),n(39,"th",35),i(40,"P.U.TTC"),e(),h(41,Tt,4,0),n(42,"th",35),i(43,"Mnt HT"),e(),n(44,"th",35),i(45,"Mnt TTC"),e()()(),n(46,"tbody"),S(47,Pt,16,8,"tr",null,O),h(49,St,5,1),h(50,Ot,5,1),h(51,Mt,5,1),e()(),n(52,"table",36)(53,"thead")(54,"tr")(55,"th"),i(56,"Total Colis"),e(),n(57,"th"),i(58,"Total PET"),e(),n(59,"th"),i(60,"Total Casier"),e(),n(61,"th"),i(62,"Liq. Nu"),e(),n(63,"th"),i(64,"Consigne (F)"),e(),n(65,"th"),i(66,"D\xE9consigne (F)"),e(),n(67,"th"),i(68,"Qt\xE9 Csgn"),e(),n(69,"th"),i(70,"Qt\xE9 Dcsgn"),e()()(),n(71,"tbody")(72,"tr")(73,"td",35),i(74),e(),n(75,"td",35),i(76),e(),n(77,"td",35),i(78),e(),n(79,"td",35),i(80),e(),n(81,"td",35),i(82),e(),n(83,"td",37),i(84),e(),n(85,"td",35),i(86),e(),n(87,"td",37),i(88),e()()()(),n(89,"div",38)(90,"div",39)(91,"div",40)(92,"span"),i(93,"Total HT"),e(),n(94,"span"),i(95),e()(),n(96,"div",40)(97,"span"),i(98,"TVA (19,25%)"),e(),n(99,"span"),i(100),e()(),h(101,Lt,5,1,"div",40),h(102,Nt,5,1,"div",41),n(103,"div",42)(104,"span"),i(105,"Total TTC"),e(),n(106,"span"),i(107),e()(),h(108,kt,5,1,"div",43),h(109,At,5,1,"div",40),h(110,Rt,5,1,"div",40),n(111,"div",44)(112,"span"),i(113,"NET \xC0 PAYER"),e(),n(114,"span"),i(115),e()(),h(116,Ft,5,1,"div",45),h(117,Ut,5,1,"div",46),e()(),n(118,"div",47),i(119," Arr\xEAt\xE9 \xE0 la somme de : "),n(120,"strong"),i(121),e()(),n(122,"div",48)(123,"div",49)(124,"div",50),i(125,"Signature du livreur"),e(),_(126,"div",51),e(),n(127,"div",49)(128,"div",50),i(129,"Cachet et signature du client"),e(),_(130,"div",51),e()()()),s&2){let t=p();o(3),E(t.companyLogoUrl?3:-1),o(2),r(t.companyName),o(),E(t.companyPhone?6:-1),o(3),r(t.docTitle),o(2),r(t.invoice==null?null:t.invoice.name),o(6),r(t.invoice==null?null:t.invoice.partnerName),o(),E(t.invoice!=null&&t.invoice.warehouseName?18:-1),o(6),r(t.fmtDate(t.invoice==null?null:t.invoice.date)),o(),E(t.invoice!=null&&t.invoice.dateEcheance?25:-1),o(),E(t.invoice!=null&&t.invoice.salesOrderName?26:-1),o(),E(t.invoice!=null&&t.invoice.notes?27:-1),o(14),E(t.salesHasRabais?41:-1),o(6),$(t.salesLines),o(2),E(t.consigneLines.length?49:-1),o(),E(t.deconsigneLines.length?50:-1),o(),E(!(t.invoice==null||t.invoice.ristourneDetails==null)&&t.invoice.ristourneDetails.length?51:-1),o(23),r(t.fmt(t.totalColis)),o(2),r(t.fmt(t.totalPET)),o(2),r(t.fmt(t.totalCasier)),o(2),r(t.fmt((t.invoice==null?null:t.invoice.totalLiquideNu)??0)),o(2),r(t.fmt(t.consigneMontant)),o(2),u("\u2013 ",t.fmt(t.deconsigneMontant)),o(2),r(t.fmt(t.qteConsigne)),o(2),u("\u2013 ",t.fmt(t.qteDeconsigne)),o(7),u("",t.fmt(t.invoice==null?null:t.invoice.totalHT)," F"),o(5),u("",t.fmt(t.invoice==null?null:t.invoice.totalTVA)," F"),o(),E(t.invoice!=null&&t.invoice.totalPrecompte?101:-1),o(),E(((t.invoice==null?null:t.invoice.fraisEnlevementTTC)??0)>0?102:-1),o(5),u("",t.fmt(t.invoice==null?null:t.invoice.totalTTC)," F"),o(),E(((t.invoice==null?null:t.invoice.totalRistourne)??0)>0?108:-1),o(),E(((t.invoice==null?null:t.invoice.totalRabais)??0)>0?109:-1),o(),E(((t.invoice==null?null:t.invoice.totalRabaisTTC)??0)>0?110:-1),o(5),u("",t.fmt((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))," F"),o(),E(t.invoice!=null&&t.invoice.montantPaye?116:-1),o(),E(t.invoice!=null&&t.invoice.montantDu?117:-1),o(4),r(t.montantEnLettres((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC)))}}function Dt(s,c){if(s&1){let t=H();n(0,"iframe",60,0),M("load",function(){z(t);let d=Z(1),l=p();return D(l.fitTicketFrame(d))}),e()}if(s&2){let t=p();I("srcdoc",t.ticketPreviewHtml,Y)}}function Ht(s,c){if(s&1&&(n(0,"div",61),_(1,"img",71),e()),s&2){let t=p(2);o(),I("src",t.companyLogoUrl,R)}}function Bt(s,c){if(s&1&&(n(0,"div",63),i(1),e()),s&2){let t=p(2);o(),r(t.companyPhone)}}function Vt(s,c){if(s&1&&(n(0,"div",72),i(1),e(),n(2,"div",73)(3,"span"),i(4),e(),n(5,"span",74),i(6),e()()),s&2){let t=c.$implicit,a=p(2);o(),r(t.description||t.productCode),o(3),V("",a.fmt(t.quantity)," \xD7 ",a.fmt(t.prixUnitaire)),o(2),u("",a.fmt(t.montantTTC)," F")}}function qt(s,c){if(s&1&&(n(0,"div",12),h(1,Ht,2,1,"div",61),n(2,"div",62),i(3),e(),h(4,Bt,2,1,"div",63),_(5,"div",64),n(6,"div",65),i(7),e(),n(8,"div",66),i(9),e(),_(10,"div",64),n(11,"div",67)(12,"span"),i(13,"Date"),e(),n(14,"span"),i(15),e()(),n(16,"div",67)(17,"span"),i(18,"Fournisseur"),e(),n(19,"span"),i(20),e()(),_(21,"div",64),S(22,Vt,7,4,null,null,O),_(24,"div",64),n(25,"div",68)(26,"span"),i(27,"Total HT"),e(),n(28,"span"),i(29),e()(),n(30,"div",68)(31,"span"),i(32,"TVA"),e(),n(33,"span"),i(34),e()(),_(35,"div",64),n(36,"div",69)(37,"span"),i(38,"NET \xC0 PAYER"),e(),n(39,"span"),i(40),e()(),_(41,"div",64),n(42,"div",70),i(43),e()()),s&2){let t=p();o(),E(t.companyLogoUrl?1:-1),o(2),r(t.companyName),o(),E(t.companyPhone?4:-1),o(3),r(t.docTitle),o(2),r(t.purchaseInvoice==null?null:t.purchaseInvoice.name),o(6),r(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.date)),o(5),r(t.purchaseInvoice==null?null:t.purchaseInvoice.partnerName),o(2),$(t.purchaseInvoiceLines),o(7),u("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalHT)," F"),o(5),u("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTVA)," F"),o(6),u("",t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC))," F"),o(3),r(t.montantEnLettres((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)))}}function Gt(s,c){if(s&1&&_(0,"img",20),s&2){let t=p(2);I("src",t.companyLogoUrl,R)}}function jt(s,c){if(s&1&&(n(0,"div",22),i(1),e()),s&2){let t=p(2);o(),u("T\xE9l : ",t.companyPhone)}}function Qt(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"Livraison pr\xE9vue"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.dateExpected))}}function Yt(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.purchaseOrder==null?null:t.purchaseOrder.notes)}}function Wt(s,c){if(s&1&&(n(0,"tr")(1,"td",77),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",34),i(6),e(),n(7,"td",35),i(8),e(),n(9,"td",35),i(10),e(),n(11,"td",35),i(12),e(),n(13,"td",35),i(14),e(),n(15,"td",53),i(16),e()()),s&2){let t=c.$implicit,a=c.$index,d=p(2);o(2),r(a+1),o(2),r(t.productCode),o(2),r(t.description),o(2),r(d.fmt(t.quantity)),o(2),r(d.fmt(t.prixUnitaire)),o(2),r(t.tauxTVA?t.tauxTVA+"%":"\u2014"),o(2),r(d.fmt(t.montantHT)),o(2),r(d.fmt(t.montantTTC))}}function Kt(s,c){if(s&1&&(n(0,"div",10)(1,"div",18)(2,"div",19),h(3,Gt,1,1,"img",20),n(4,"div",21),i(5),e(),h(6,jt,2,1,"div",22),e(),n(7,"div",23)(8,"div",24),i(9,"BON DE COMMANDE"),e(),n(10,"div",25),i(11),e()()(),n(12,"div",26)(13,"div",27)(14,"div",28),i(15,"FOURNISSEUR"),e(),n(16,"div",29),i(17),e()(),n(18,"div",31)(19,"div",32)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),h(24,Qt,5,1,"div",32),h(25,Yt,5,1,"div",32),e()(),n(26,"table",33)(27,"thead")(28,"tr")(29,"th",35),i(30,"#"),e(),n(31,"th"),i(32,"Code"),e(),n(33,"th",34),i(34,"D\xE9signation"),e(),n(35,"th",35),i(36,"Qt\xE9"),e(),n(37,"th",35),i(38,"P.U. HT"),e(),n(39,"th",35),i(40,"TVA"),e(),n(41,"th",35),i(42,"Total HT"),e(),n(43,"th",35),i(44,"Total TTC"),e()()(),n(45,"tbody"),S(46,Wt,17,8,"tr",null,O),e()(),n(48,"div",38)(49,"div",39)(50,"div",40)(51,"span"),i(52,"Total HT"),e(),n(53,"span"),i(54),e()(),n(55,"div",40)(56,"span"),i(57,"Taxes (TVA + PSA)"),e(),n(58,"span"),i(59),e()(),n(60,"div",44)(61,"span"),i(62,"TOTAL TTC"),e(),n(63,"span"),i(64),e()()()(),n(65,"div",47),i(66," Arr\xEAt\xE9 \xE0 la somme de : "),n(67,"strong"),i(68),e()(),n(69,"div",48)(70,"div",49)(71,"div",50),i(72,"Le fournisseur"),e(),n(73,"div",75),i(74,"Nom : ________________________"),e(),_(75,"div",51),e(),n(76,"div",49)(77,"div",50),i(78,"Pour la soci\xE9t\xE9"),e(),n(79,"div",75),i(80,"Nom : ________________________"),e(),_(81,"div",51),e()(),n(82,"div",76),i(83),e()()),s&2){let t=p();o(3),E(t.companyLogoUrl?3:-1),o(2),r(t.companyName),o(),E(t.companyPhone?6:-1),o(5),r(t.purchaseOrder==null?null:t.purchaseOrder.name),o(6),r((t.purchaseOrder==null?null:t.purchaseOrder.partnerName)||"\u2014"),o(6),r(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.date)),o(),E(t.purchaseOrder!=null&&t.purchaseOrder.dateExpected?24:-1),o(),E(t.purchaseOrder!=null&&t.purchaseOrder.notes?25:-1),o(21),$((t.purchaseOrder==null?null:t.purchaseOrder.lines)??q(13,et)),o(8),u("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalHT)," F"),o(5),u("",t.fmt(((t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)??0)-((t.purchaseOrder==null?null:t.purchaseOrder.totalHT)??0))," F"),o(5),u("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)," F"),o(4),r(t.montantEnLettres(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)),o(15),u("Bon de commande soumis \xE0 acceptation \xB7 ",t.companyName)}}function Zt(s,c){if(s&1&&_(0,"img",20),s&2){let t=p(2);I("src",t.companyLogoUrl,R)}}function Jt(s,c){if(s&1&&(n(0,"div",22),i(1),e()),s&2){let t=p(2);o(),u("T\xE9l : ",t.companyPhone)}}function Xt(s,c){if(s&1&&(n(0,"div",30),i(1),e()),s&2){let t=p(2);o(),r(t.salesOrder==null?null:t.salesOrder.warehouseName)}}function te(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.fmtDate(t.salesOrder==null?null:t.salesOrder.dateEcheance))}}function ee(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"Facture"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.salesOrder==null?null:t.salesOrder.invoiceName)}}function ne(s,c){if(s&1&&(n(0,"div",32)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),r(t.salesOrder==null?null:t.salesOrder.notes)}}function ie(s,c){if(s&1&&(n(0,"tr")(1,"td",77),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",34),i(6),e(),n(7,"td",35),i(8),e(),n(9,"td",35),i(10),e(),n(11,"td",35),i(12),e(),n(13,"td",35),i(14),e(),n(15,"td",35),i(16),e(),n(17,"td",53),i(18),e()()),s&2){let t=c.$implicit,a=c.$index,d=p(2);o(2),r(a+1),o(2),r(t.productCode),o(2),r(t.description),o(2),r(d.fmt(t.quantity)),o(2),r(d.fmt(t.prixUnitaire)),o(2),r(t.tauxRemise?t.tauxRemise+"%":"\u2014"),o(2),r(t.tauxTVA?t.tauxTVA+"%":"\u2014"),o(2),r(d.fmt(t.montantHT)),o(2),r(d.fmt(t.montantTTC))}}function ae(s,c){if(s&1&&(n(0,"div",78)(1,"span"),i(2,"Remise totale"),e(),n(3,"span"),i(4),e()()),s&2){let t=p(2);o(4),u("\u2013 ",t.fmt(t.salesOrder==null?null:t.salesOrder.totalRemise)," F")}}function oe(s,c){if(s&1&&(n(0,"div",10)(1,"div",18)(2,"div",19),h(3,Zt,1,1,"img",20),n(4,"div",21),i(5),e(),h(6,Jt,2,1,"div",22),e(),n(7,"div",23)(8,"div",24),i(9,"BON DE COMMANDE"),e(),n(10,"div",25),i(11),e()()(),n(12,"div",26)(13,"div",27)(14,"div",28),i(15,"CLIENT"),e(),n(16,"div",29),i(17),e(),h(18,Xt,2,1,"div",30),e(),n(19,"div",31)(20,"div",32)(21,"span"),i(22,"Date"),e(),n(23,"span"),i(24),e()(),h(25,te,5,1,"div",32),h(26,ee,5,1,"div",32),h(27,ne,5,1,"div",32),e()(),n(28,"table",33)(29,"thead")(30,"tr")(31,"th",35),i(32,"#"),e(),n(33,"th"),i(34,"Code"),e(),n(35,"th",34),i(36,"D\xE9signation"),e(),n(37,"th",35),i(38,"Qt\xE9"),e(),n(39,"th",35),i(40,"P.U. HT"),e(),n(41,"th",35),i(42,"Remise"),e(),n(43,"th",35),i(44,"TVA"),e(),n(45,"th",35),i(46,"Mnt HT"),e(),n(47,"th",35),i(48,"Mnt TTC"),e()()(),n(49,"tbody"),S(50,ie,19,9,"tr",null,O),e()(),n(52,"div",38)(53,"div",39),h(54,ae,5,1,"div",78),n(55,"div",40)(56,"span"),i(57,"Total HT"),e(),n(58,"span"),i(59),e()(),n(60,"div",40)(61,"span"),i(62,"TVA (19,25%)"),e(),n(63,"span"),i(64),e()(),n(65,"div",44)(66,"span"),i(67,"TOTAL TTC"),e(),n(68,"span"),i(69),e()()()(),n(70,"div",47),i(71," Arr\xEAt\xE9 \xE0 la somme de : "),n(72,"strong"),i(73),e()(),n(74,"div",48)(75,"div",49)(76,"div",50),i(77,"Le client"),e(),n(78,"div",75),i(79,"Nom : ________________________"),e(),_(80,"div",51),e(),n(81,"div",49)(82,"div",50),i(83,"Pour la soci\xE9t\xE9"),e(),n(84,"div",75),i(85,"Nom : ________________________"),e(),_(86,"div",51),e()(),n(87,"div",76),i(88),e()()),s&2){let t=p();o(3),E(t.companyLogoUrl?3:-1),o(2),r(t.companyName),o(),E(t.companyPhone?6:-1),o(5),r(t.salesOrder==null?null:t.salesOrder.name),o(6),r((t.salesOrder==null?null:t.salesOrder.partnerName)||"\u2014"),o(),E(t.salesOrder!=null&&t.salesOrder.warehouseName?18:-1),o(6),r(t.fmtDate(t.salesOrder==null?null:t.salesOrder.date)),o(),E(t.salesOrder!=null&&t.salesOrder.dateEcheance?25:-1),o(),E(t.salesOrder!=null&&t.salesOrder.invoiceName?26:-1),o(),E(t.salesOrder!=null&&t.salesOrder.notes?27:-1),o(23),$((t.salesOrder==null?null:t.salesOrder.lines)??q(16,et)),o(4),E(t.salesOrder!=null&&t.salesOrder.totalRemise?54:-1),o(5),u("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalHT)," F"),o(5),u("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTVA)," F"),o(5),u("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTTC)," F"),o(4),r(t.montantEnLettres(t.salesOrder==null?null:t.salesOrder.totalTTC)),o(15),u("Bon de commande \xB7 ",t.companyName)}}var ue=(()=>{class s{constructor(t){this.sanitizer=t,this.invoice=null,this.picking=null,this.purchaseInvoice=null,this.purchaseOrder=null,this.salesOrder=null,this.docType="invoice",this.companyName="",this.companyPhone="",this.companyLogoUrl="",this.companyLogoDataUrl="",this.companyInfo=null,this.closed=new Q,this.format="a4",this.printing=!1,this.FORMATS=[{value:"a4",label:"A4",icon:"description"},{value:"a5",label:"A5",icon:"article"},{value:"ticket",label:"Ticket",icon:"receipt"}],this.ticketPreviewSrc="",this.ticketPreviewSafe=null}get docTitle(){return this.docType==="bon"?"BON DE LIVRAISON":this.docType==="avoir"?"AVOIR":this.docType==="purchase_order"||this.docType==="sales_order"?"BON DE COMMANDE":this.docType==="purchase_invoice"?this.purchaseInvoice?.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR":"FACTURE"}get docRef(){return this.invoice?.name??this.picking?.name??this.purchaseInvoice?.name??this.purchaseOrder?.name??this.salesOrder?.name??""}get client(){return this.invoice?.partnerName??this.picking?.partnerName??this.purchaseInvoice?.partnerName??this.purchaseOrder?.partnerName??this.salesOrder?.partnerName??""}get allLines(){return this.invoice?.lines??[]}get salesHasRabais(){return(this.invoice?.totalRabais??0)>0||this.salesLines.some(t=>(t.rabaisUnitaire??0)>0)}get salesLines(){return this.allLines.filter(t=>!this.isConsigneLine(t)&&(t.quantity??0)>=0)}get consigneLines(){return this.allLines.filter(t=>this.isConsigneLine(t)&&(t.quantity??0)>=0)}get deconsigneLines(){return this.allLines.filter(t=>(t.quantity??0)<0)}get pickingMoves(){return this.picking?.moves??[]}get totalPickingQty(){return this.pickingMoves.reduce((t,a)=>t+(a.qtyDone??a.qtyDemanded??0),0)}get purchaseInvoiceLines(){return this.purchaseInvoice?.lines??[]}get purchaseInvoiceHasRabais(){return this.purchaseInvoiceLines.some(t=>(t.rabaisUnitaire??0)>0)}get purchaseNormalLines(){return this.purchaseInvoiceLines.filter(t=>!t.consigne&&(t.quantity??0)>=0)}get purchaseConsigneLines(){return this.purchaseInvoiceLines.filter(t=>t.consigne===!0&&(t.quantity??0)>=0)}get purchaseDeconsigneLines(){return this.purchaseInvoiceLines.filter(t=>(t.quantity??0)<0)}get purchaseTotalColis(){return this.purchaseNormalLines.reduce((t,a)=>t+(a.quantity??0),0)}get purchaseTotalPET(){return this.purchaseNormalLines.filter(t=>t.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((t,a)=>t+(a.quantity??0),0)}get purchaseConsigneMontant(){return this.purchaseConsigneLines.reduce((t,a)=>t+(a.montantTTC??0),0)}get purchaseDeconsigneMontant(){return this.purchaseDeconsigneLines.reduce((t,a)=>t+Math.abs(a.montantTTC??0),0)}get purchaseQteConsigne(){return this.purchaseConsigneLines.reduce((t,a)=>t+(a.quantity??0),0)}get purchaseQteDeconsigne(){return this.purchaseDeconsigneLines.reduce((t,a)=>t+Math.abs(a.quantity??0),0)}get purchaseTotalRabaisHT(){return this.purchaseInvoiceLines.reduce((t,a)=>t+(a.totalRabaisLigne??0),0)}get purchaseTotalRabaisTTC(){return this.purchaseInvoiceLines.reduce((t,a)=>{let d=a.totalRabaisLigne??0;return t+d*(1+(a.tauxTVA??0)/100)},0)}get totalColis(){return this.salesLines.reduce((t,a)=>t+(a.quantity??0),0)}get totalPET(){return this.salesLines.filter(t=>t.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((t,a)=>t+(a.quantity??0),0)}get totalCasier(){return this.salesLines.filter(t=>t.uomName?.toLowerCase().includes("casier")).reduce((t,a)=>t+(a.quantity??0),0)}get consigneMontant(){return this.consigneLines.reduce((t,a)=>t+(a.montantTTC??0),0)}get deconsigneMontant(){return this.deconsigneLines.reduce((t,a)=>t+Math.abs(a.montantTTC??0),0)}get qteConsigne(){return this.consigneLines.reduce((t,a)=>t+(a.quantity??0),0)}get qteDeconsigne(){return this.deconsigneLines.reduce((t,a)=>t+Math.abs(a.quantity??0),0)}isConsigneLine(t){return t.consigne===!0||!!t.productCode&&G.has(t.productCode.trim().toUpperCase())}isConsigne(t){return!!t&&G.has(t.trim().toUpperCase())}fmt(t){return t==null?"0":new Intl.NumberFormat("fr-FR",{maximumFractionDigits:0}).format(t)}fmtDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})}catch(a){return t}}montantEnLettres(t){return at(Math.round(t??0))+" Francs CFA"}setFormat(t){this.format=t}close(){this.closed.emit()}print(){this.printing=!0;let t=this.buildFullHtml(),a=window.open("","_blank","width=1000,height=1100");if(!a){this.printing=!1;return}a.document.write(t),a.document.close(),a.focus(),setTimeout(()=>{a.print(),a.onafterprint=()=>{a.close(),this.printing=!1}},600)}buildFullHtml(){let t,a;return this.docType==="bon"?(t=se,a=this.buildBonBody()):this.docType==="purchase_order"?(t=this.format==="a5"?B:U,a=this.buildPurchaseOrderBody()):this.docType==="sales_order"?(t=this.format==="a5"?B:U,a=this.buildSalesOrderBody()):this.docType==="purchase_invoice"?(t=this.format==="ticket"?tt:this.format==="a5"?B:U,a=this.format==="ticket"?this.buildPurchaseInvoiceTicketBody():this.buildPurchaseInvoiceBody(this.format==="a5")):(t=this.format==="ticket"?tt:this.format==="a5"?B:U,a=this.format==="ticket"?this.buildTicketBody():this.buildInvoiceBody(this.format==="a5")),`<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>${this.docTitle} ${this.docRef}</title>
<style>${t}</style></head><body>${a}</body></html>`}h(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}logoImgHtml(){return this.companyLogoDataUrl?`<img src="${this.companyLogoDataUrl}" class="co-logo" alt="logo">`:this.companyLogoUrl?`<img src="${this.companyLogoUrl.startsWith("http")?this.companyLogoUrl:`${window.location.origin}${this.companyLogoUrl}`}" class="co-logo" alt="logo">`:""}companyHeaderHtml(){let t=this.companyInfo,a=t?.name||this.companyName||"",d=t?.sigle||"",l=t?.rccm||"",x=t?.nif||"",b=t?.adresse||"",C=t?.telephone||this.companyPhone||"",P=t?.email||"",y=d?` <span class="co-sigle">(${this.h(d)})</span>`:"",m=b?`<div class="co-info">${this.h(b)}</div>`:"",T=l?`<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(l)}</div>`:"",g=x?`<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(x)}</div>`:"",f=C?`<div class="co-info"><span class="co-lbl">T\xE9l :</span> ${this.h(C)}</div>`:"",w=P?`<div class="co-info"><span class="co-lbl">Email :</span> ${this.h(P)}</div>`:"";return`${this.logoImgHtml()}
      <div class="co-name">${this.h(a)}${y}</div>
      ${m}${T}${g}${f}${w}`}ticketCompanyHtml(){let t=this.companyInfo,a=t?.name||this.companyName||"",d=t?.sigle||"",l=t?.rccm||"",x=t?.nif||"",b=t?.telephone||this.companyPhone||"",C=t?.email||"",P=this.logoImgHtml();return`
      ${P?`<div class="t-logo">${P}</div>`:""}
      <div class="t-company">${this.h(a)}${d?` (${this.h(d)})`:""}</div>
      ${l?`<div class="t-coinfo">RCCM : ${this.h(l)}</div>`:""}
      ${x?`<div class="t-coinfo">NIF : ${this.h(x)}</div>`:""}
      ${b?`<div class="t-coinfo">T\xE9l : ${this.h(b)}</div>`:""}
      ${C?`<div class="t-coinfo">Email : ${this.h(C)}</div>`:""}`}buildInvoiceBody(t=!1){let a=this.invoice,d=this.docType==="avoir"?"AVOIR":"FACTURE",l=this.salesHasRabais,x=this.salesLines.map(m=>`
      <tr>
        <td>${this.h(m.productCode)}</td>
        <td class="desc">${this.h(m.description)}</td>
        <td class="r">${this.fmt(m.quantity)}</td>
        <td class="r">${this.fmt(m.prixUnitaire)}</td>
        <td class="r bold-teal">${this.fmt(m.prixUnitaireTTC??0)}</td>
        ${l?`<td class="r rabais">${(m.rabaisUnitaire??0)>0?"\u2013"+this.fmt(m.rabaisUnitaire):"\u2014"}</td>
        <td class="r rabais-ttc">${(m.rabaisUnitaireTTC??0)>0?"\u2013"+this.fmt(m.rabaisUnitaireTTC):"\u2014"}</td>`:""}
        <td class="r">${this.fmt(m.montantHT)}</td>
        <td class="r bold">${this.fmt(m.montantTTC)}</td>
      </tr>`).join(""),b=this.consigneLines.length?`
      <tr class="consigne-header"><td colspan="${l?9:7}">CONSIGNES</td></tr>
      ${this.consigneLines.map(m=>`
        <tr class="consigne-row">
          <td>${this.h(m.productCode)}</td>
          <td class="desc">${this.h(m.description)}</td>
          <td class="r">${this.fmt(m.quantity)}</td>
          <td colspan="${l?4:2}"></td>
          <td></td>
          <td class="r">${this.fmt(m.montantTTC)}</td>
        </tr>`).join("")}`:"",C=this.deconsigneLines.length?`
      <tr class="deconsigne-header"><td colspan="${l?9:7}">D\xC9CONSIGNES</td></tr>
      ${this.deconsigneLines.map(m=>`
        <tr class="consigne-row">
          <td>${this.h(m.productCode)}</td>
          <td class="desc">${this.h(m.description)}</td>
          <td class="r">${this.fmt(Math.abs(m.quantity??0))}</td>
          <td colspan="${l?4:2}"></td>
          <td></td>
          <td class="r">${this.fmt(m.montantTTC)}</td>
        </tr>`).join("")}`:"",P=a.ristourneDetails?.length?`
      <tr class="section-header"><td colspan="${l?9:7}">RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)</td></tr>
      ${a.ristourneDetails.map(m=>`
        <tr class="ristourne-row">
          <td colspan="2">${this.h(m.categoryName)}</td>
          <td class="r">${this.fmt(m.quantite)}</td>
          <td class="r">${this.fmt(m.montantUnitaire)}</td>
          <td></td>
          ${l?"<td></td><td></td>":""}
          <td class="r">${this.fmt(m.montantTotal)}</td>
          <td class="r">${this.fmt(m.montantTotal)}</td>
        </tr>`).join("")}`:"",y=a.netAPayer??(a.totalTTC??0)+(a.fraisEnlevementTTC??0);return`
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${d}</div>
      <div class="doc-ref">${this.h(a.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT</div>
      <div class="meta-value">${this.h(a.partnerName)}</div>
      ${a.warehouseName?`<div class="meta-sub">Entrep\xF4t : ${this.h(a.warehouseName)}</div>`:""}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(a.date)}</span></div>
      ${a.dateEcheance?`<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(a.dateEcheance)}</span></div>`:""}
      ${a.salesOrderName?`<div class="meta-row"><span class="ml">Commande</span><span>${this.h(a.salesOrderName)}</span></div>`:""}
      ${a.notes?`<div class="meta-row"><span class="ml">R\xE9f. client</span><span>${this.h(a.notes)}</span></div>`:""}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U.HT</th>
        <th class="r">P.U.TTC</th>${l?'<th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>':""}
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${x}
      ${b}
      ${C}
      ${P}
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
      <td class="r">${this.fmt(a.totalLiquideNu??0)}</td>
      <td class="r">${this.fmt(this.consigneMontant)}</td>
      <td class="r">\u2013 ${this.fmt(this.deconsigneMontant)}</td>
      <td class="r">${this.fmt(this.qteConsigne)}</td>
      <td class="r">\u2013 ${this.fmt(this.qteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(a.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(a.totalTVA)} F</span></div>
      ${a.totalPrecompte?`<div class="tot-row"><span>Pr\xE9compte (PSA)</span><span>${this.fmt(a.totalPrecompte)} F</span></div>`:""}
      ${(a.fraisEnlevementTTC??0)>0?`<div class="tot-row enlevement"><span>Frais d'enl\xE8vement</span><span>+ ${this.fmt(a.fraisEnlevementTTC)} F</span></div>`:""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(a.totalTTC)} F</span></div>
      ${(a.totalRistourne??0)>0?`<div class="tot-row ristourne"><span>Ristournes (\xE0 r\xE9cup\xE9rer)</span><span>${this.fmt(a.totalRistourne)} F</span></div>`:""}
      ${(a.totalRabais??0)>0?`<div class="tot-row rabais"><span>Rabais HT</span><span>- ${this.fmt(a.totalRabais)} F</span></div>`:""}
      ${(a.totalRabaisTTC??0)>0?`<div class="tot-row rabais"><span>Rabais TTC d\xE9duit</span><span>- ${this.fmt(a.totalRabaisTTC)} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(y)} F</span></div>
      ${a.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(a.montantPaye)} F</span></div>`:""}
      ${(a.montantDu??0)>.01?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(a.montantDu)} F</span></div>`:""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(y)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du livreur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature du client</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${a.createdBy?"Agent : "+this.h(a.createdBy)+" \xB7 ":""}${this.h(this.companyName)}</div>
</div>`}uomShort(t){let a=(t??"").trim();if(!a)return"";let d=/casier\D*(\d+)/i.exec(a);if(d)return"C"+d[1];let l=/carton\D*(\d+)/i.exec(a);return l?"CT"+l[1]:/^(pcs?|pi[eè]ce|unit[eé]s?)$/i.test(a)?"PCS":a.length>6?a.slice(0,6):a}buildTicketBody(){let t=this.invoice,a=this.docType==="avoir"?"Avoir":"Facture",d=t.netAPayer??(t.totalTTC??0)+(t.fraisEnlevementTTC??0),l=this.companyInfo,x=l?.name||this.companyName||"",b=this.logoImgHtml(),C=(v,A,dt,rt,lt)=>`
      <tr>
        <td>${this.h(v)}</td>
        <td class="r nowrap">${this.fmt(A)}</td>
        <td class="nowrap">${this.h(dt)}</td>
        <td class="r">${this.fmt(rt)}</td>
        <td class="r">${this.fmt(lt)}</td>
      </tr>`,P=v=>`<tr class="t-sec"><td colspan="5">${v}</td></tr>`,y=this.salesLines.map(v=>C(v.productCode||v.description,v.quantity,this.uomShort(v.uomName),v.prixUnitaireTTC??v.prixUnitaire,v.montantTTC)).join(""),m=this.consigneLines.map(v=>C(v.productCode||v.description,v.quantity,this.uomShort(v.uomName)||"PCS",v.prixUnitaireTTC??v.prixUnitaire,v.montantTTC)).join(""),T=this.deconsigneLines.map(v=>C(v.productCode||v.description,Math.abs(v.quantity??0),this.uomShort(v.uomName)||"PCS",v.prixUnitaireTTC??v.prixUnitaire,-Math.abs(v.montantTTC??0))).join(""),g=(v,A)=>`<div class="t-line"><span>${v}</span><span>${A}</span></div>`,f=v=>`${this.fmt(v)} FCFA`,w=(t.totalHT??0)>0&&(t.totalPrecompte??0)>0?Math.round((t.totalPrecompte??0)/(t.totalHT??1)*1e3)/10:null,k=t.ristourneDetails??[],ot=k.length?`
  <table class="t-grid t-annex">
    <thead><tr><th>Famille</th><th class="r">Qt\xE9</th><th class="r">P.U</th><th class="r">Ristourne</th></tr></thead>
    <tbody>
      ${k.map(v=>`<tr><td>${this.h(v.categoryName)}</td><td class="r">${this.fmt(v.quantite)}</td>
        <td class="r">${this.fmt(v.montantUnitaire)}</td><td class="r">${this.fmt(v.montantTotal)}</td></tr>`).join("")}
      <tr class="t-tot"><td colspan="3">TOTAL</td><td class="r">${this.fmt(t.totalRistourne??k.reduce((v,A)=>v+(A.montantTotal??0),0))}</td></tr>
    </tbody>
  </table>`:"",L=t.totalGuinessTaxe??0,st=L>0?`
  <table class="t-grid t-annex">
    <thead><tr><th>Taxe Guinness</th><th class="r">Qt\xE9</th><th class="r">P.U</th><th class="r">Montant</th></tr></thead>
    <tbody>
      <tr><td>Guinness</td><td class="r">${this.fmt(Math.round(L/300))}</td><td class="r">300</td><td class="r">${this.fmt(L)}</td></tr>
      <tr class="t-tot"><td colspan="3">TOTAL</td><td class="r">${this.fmt(L)}</td></tr>
    </tbody>
  </table>`:"",j=(t.payments??[]).filter(v=>v.state!=="reversed");return`
<div class="ticket">
  ${b?`<div class="t-logo">${b}</div>`:""}
  <div class="t-company">${this.h(x)}</div>
  ${l?.sigle?`<div class="t-coinfo">${this.h(l.sigle)}</div>`:""}
  ${l?.nif?`<div class="t-coinfo">${this.h(l.nif)}</div>`:""}
  ${l?.adresse?`<div class="t-coinfo">${this.h(l.adresse)}</div>`:""}
  ${l?.rccm?`<div class="t-coinfo">${this.h(l.rccm)}</div>`:""}
  ${l?.telephone||this.companyPhone?`<div class="t-coinfo">T\xE9l : ${this.h(l?.telephone||this.companyPhone)}</div>`:""}
  <div class="t-sep"></div>
  <div class="t-kv"><b>Client:</b> ${this.h(t.partnerName)}</div>
  ${t.partnerRef?`<div class="t-kv"><b>Code client:</b> ${this.h(t.partnerRef)}</div>`:""}
  ${t.sellerName||t.createdByName||t.createdBy?`<div class="t-kv"><b>Caissier:</b> ${this.h(t.sellerName||t.createdByName||t.createdBy)}</div>`:""}
  <div class="t-kv"><b>${a}: ${this.h(t.name)} ${this.fmtDate(t.date)}</b></div>
  ${t.notes?`<div class="t-kv"><b>R\xE9f.:</b> ${this.h(t.notes)}</div>`:""}

  <table class="t-grid t-main">
    <thead><tr><th>Art</th><th class="r" colspan="2">Qt\xE9</th><th class="r">PU</th><th class="r">PT</th></tr></thead>
    <tbody>
      ${y?P("Commande")+y:""}
      ${m?P("Consignes")+m:""}
      ${T?P("D\xE9consignes")+T:""}
    </tbody>
  </table>

  <div class="t-block">
    ${g("Nombre de colis:",this.fmt(this.totalColis))}
    ${this.consigneMontant||this.deconsigneMontant?g("Total consignation:",f(this.consigneMontant)):""}
    ${this.consigneMontant||this.deconsigneMontant?g("Total d\xE9consignation:",f(-Math.abs(this.deconsigneMontant))):""}
  </div>

  <div class="t-block">
    ${g("Total HT:",f(t.totalHT))}
    ${(t.fraisEnlevementHT??0)>0?g("Total frais d\u2019enl\xE8vement HT:",f(t.fraisEnlevementHT)):""}
    ${g("TVA 19,25 %:",f(t.totalTVA))}
    ${(t.fraisEnlevementTVA??0)>0?g("TVA frais d\u2019enl\xE8vement (19,25 %):",f(t.fraisEnlevementTVA)):""}
    ${(t.totalPrecompte??0)>0?g(`PSA${w!=null?" ("+String(w).replace(".",",")+" %)":""}:`,f(t.totalPrecompte)):""}
    ${(t.totalLiquideNu??0)>0?g("Total liquide nu:",f(t.totalLiquideNu)):""}
    ${(t.fraisEnlevementTTC??0)>0?g("Frais d\u2019enl\xE8vement:",f(t.fraisEnlevementTTC)):""}
    ${g("TOTAL TTC:",f(t.totalTTC))}
    ${(t.totalRistourne??0)>0?g("TOTAL Ristourne:",f(t.totalRistourne)):""}
    ${L>0?g("TOTAL Taxe Guinness:",f(L)):""}
    ${(t.totalRabaisTTC??0)>0?g("TOTAL Rabais:","- "+f(t.totalRabaisTTC)):""}
  </div>

  <div class="t-net">NET \xC0 PAYER ${this.fmt(d)} FCFA</div>
  <div class="t-lettres">${this.montantEnLettres(d)}</div>

  ${j.length?`<div class="t-block">${j.map(v=>g(`${this.h(v.journalName||"R\xE8glement")}:`,f(v.amount))).join("")}
    ${(t.montantDu??0)>.01?g("Reste d\xFB:",f(t.montantDu)):""}</div>`:""}

  ${ot}
  ${st}

  <div class="t-sig-title">Signatures</div>
  <div class="t-sig-row">
    <div class="t-sig-cell"><div class="t-sig-lbl">Livreur</div><div class="t-sig-area"></div></div>
    <div class="t-sig-cell"><div class="t-sig-lbl">Client</div><div class="t-sig-area"></div></div>
  </div>
  <div class="t-thanks">Merci de votre confiance !</div>
</div>`}get ticketPreviewHtml(){let t=this.buildFullHtml();return(t!==this.ticketPreviewSrc||!this.ticketPreviewSafe)&&(this.ticketPreviewSrc=t,this.ticketPreviewSafe=this.sanitizer.bypassSecurityTrustHtml(t)),this.ticketPreviewSafe}fitTicketFrame(t){let a=t.contentDocument;a?.body&&(t.style.height=a.documentElement.scrollHeight+4+"px")}buildPurchaseInvoiceBody(t=!1){let a=this.purchaseInvoice,d=a.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR",l=this.purchaseTotalRabaisHT,x=this.purchaseTotalRabaisTTC,b=this.purchaseNormalLines.map(m=>{let T=m.prixUnitaire??0,g=T*(1+(m.tauxTVA??0)/100),f=m.rabaisUnitaire??0,w=f*(1+(m.tauxTVA??0)/100),k=(m.montantHT??0)+(m.montantTVA??0)+(m.precompte??0);return`
      <tr>
        <td>${this.h(m.productCode)}</td>
        <td class="desc">${this.h(m.description)}</td>
        <td class="r">${this.fmt(m.quantity)}</td>
        <td class="r">${this.fmt(T)}</td>
        <td class="r bold-teal">${this.fmt(g)}</td>
        <td class="r rabais">${f>0?"\u2013"+this.fmt(f):"\u2014"}</td>
        <td class="r rabais-ttc">${w>0?"\u2013"+this.fmt(w):"\u2014"}</td>
        <td class="r">${this.fmt(m.montantHT)}</td>
        <td class="r bold">${this.fmt(Math.round(k))}</td>
      </tr>`}).join(""),C=this.purchaseConsigneLines.length?`
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.purchaseConsigneLines.map(m=>`
        <tr class="consigne-row">
          <td>${this.h(m.productCode)}</td>
          <td class="desc">${this.h(m.description)}</td>
          <td class="r">${this.fmt(m.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(m.montantTTC)}</td>
        </tr>`).join("")}`:"",P=this.purchaseDeconsigneLines.length?`
      <tr class="deconsigne-header"><td colspan="9">D\xC9CONSIGNES</td></tr>
      ${this.purchaseDeconsigneLines.map(m=>`
        <tr class="consigne-row">
          <td>${this.h(m.productCode)}</td>
          <td class="desc">${this.h(m.description)}</td>
          <td class="r">${this.fmt(Math.abs(m.quantity??0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(m.montantTTC)}</td>
        </tr>`).join("")}`:"",y=a.netAPayer??a.totalTTC??0;return`
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${d}</div>
      <div class="doc-ref">${this.h(a.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">FOURNISSEUR</div>
      <div class="meta-value">${this.h(a.partnerName)}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(a.date)}</span></div>
      ${a.dateEcheance?`<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(a.dateEcheance)}</span></div>`:""}
      ${a.purchaseOrderName?`<div class="meta-row"><span class="ml">Commande</span><span>${this.h(a.purchaseOrderName)}</span></div>`:""}
      ${a.notes?`<div class="meta-row"><span class="ml">R\xE9f.</span><span>${this.h(a.notes)}</span></div>`:""}
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
      ${b}
      ${C}
      ${P}
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
      <td class="r">${this.fmt(a.totalLiquideNu??0)}</td>
      <td class="r">${this.fmt(this.purchaseConsigneMontant)}</td>
      <td class="r">\u2013 ${this.fmt(this.purchaseDeconsigneMontant)}</td>
      <td class="r">${this.fmt(this.purchaseQteConsigne)}</td>
      <td class="r">\u2013 ${this.fmt(this.purchaseQteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(a.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(a.totalTVA)} F</span></div>
      ${a.totalPrecompte?`<div class="tot-row"><span>Pr\xE9compte (PSA)</span><span>${this.fmt(a.totalPrecompte)} F</span></div>`:""}
      ${(a.fraisEnlevementTTC??0)>0?`<div class="tot-row enlevement"><span>Frais d'enl\xE8vement</span><span>+ ${this.fmt(a.fraisEnlevementTTC)} F</span></div>`:""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(a.totalTTC)} F</span></div>
      ${l>0?`<div class="tot-row ristourne"><span>Rabais HT (601901)</span><span>\u2013 ${this.fmt(Math.round(l))} F</span></div>`:""}
      ${x>0?`<div class="tot-row rabais"><span>Rabais TTC d\xE9duit</span><span>\u2013 ${this.fmt(Math.round(x))} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(y)} F</span></div>
      ${a.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(a.montantPaye)} F</span></div>`:""}
      ${(a.montantDu??0)>.01?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(a.montantDu)} F</span></div>`:""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(y)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du fournisseur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${a.createdBy?"Agent : "+this.h(a.createdBy)+" \xB7 ":""}${this.h(this.companyName)}</div>
</div>`}buildPurchaseInvoiceTicketBody(){let t=this.purchaseInvoice,a=t.type==="credit_note"?"AVOIR FOURN.":"FACT. FOURN.",d=t.netAPayer??t.totalTTC??0,l=this.purchaseInvoiceLines.map(x=>`
      <tr>
        <td class="tname">${this.h(x.productCode||x.description)}</td>
        <td class="r">${this.fmt(x.quantity)}\xD7${this.fmt(x.prixUnitaire)}</td>
        <td class="r">${this.fmt(x.montantTTC)}</td>
      </tr>`).join("");return`
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${a}</div>
  <div class="t-ref">${this.h(t.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(t.date)}</span></div>
  <div class="t-line"><span>Fournisseur</span><span>${this.h(t.partnerName)}</span></div>
  <div class="t-sep"></div>
  <table class="t-lines"><tbody>${l}</tbody></table>
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(t.totalHT)} F</span></div>
  <div class="t-line"><span>TVA</span><span>${this.fmt(t.totalTVA)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-total"><span>NET \xC0 PAYER</span><span>${this.fmt(d)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(d)}</div>
</div>`}buildPurchaseOrderBody(){let t=this.purchaseOrder,a=(t.lines||[]).map((d,l)=>`
      <tr>
        <td class="r idx">${l+1}</td>
        <td>${this.h(d.productCode)}</td>
        <td class="desc">${this.h(d.description)}</td>
        <td class="r">${this.fmt(d.quantity)}</td>
        <td class="r">${this.fmt(d.prixUnitaire)}</td>
        <td class="r">${d.tauxTVA?d.tauxTVA+"%":"\u2014"}</td>
        <td class="r">${this.fmt(d.montantHT)}</td>
        <td class="r bold">${this.fmt(d.montantTTC)}</td>
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
    <tbody>${a}</tbody>
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
</div>`}buildSalesOrderBody(){let t=this.salesOrder,d=(t.lines||[]).filter(l=>l.productId||l.productCode&&l.productCode.trim()).map((l,x)=>`
      <tr>
        <td class="r idx">${x+1}</td>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(l.prixUnitaire)}</td>
        ${l.tauxRemise?`<td class="r">${l.tauxRemise}%</td>`:'<td class="r">\u2014</td>'}
        <td class="r">${l.tauxTVA?l.tauxTVA+"%":"\u2014"}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(l.montantTTC)}</td>
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
    <tbody>${d}</tbody>
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
</div>`}buildBonBody(){let t=this.picking,a=this.pickingMoves.map((l,x)=>`
      <tr>
        <td class="r idx">${x+1}</td>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.productName)}</td>
        <td class="r">${this.fmt(l.qtyDemanded)}</td>
        <td class="r bold">${this.fmt(l.qtyDone??l.qtyDemanded)}</td>
        <td>${this.h(l.uomName)}</td>
      </tr>`).join(""),d=this.pickingMoves.reduce((l,x)=>l+(x.qtyDone??x.qtyDemanded??0),0);return`
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
      ${a}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="r total-lbl">TOTAL COLIS LIVR\xC9S</td>
        <td class="r bold total-val">${this.fmt(d)}</td>
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
</div>`}static{this.\u0275fac=function(a){return new(a||s)(W(X))}}static{this.\u0275cmp=K({type:s,selectors:[["app-print-preview"]],inputs:{invoice:"invoice",picking:"picking",purchaseInvoice:"purchaseInvoice",purchaseOrder:"purchaseOrder",salesOrder:"salesOrder",docType:"docType",companyName:"companyName",companyPhone:"companyPhone",companyLogoUrl:"companyLogoUrl",companyLogoDataUrl:"companyLogoDataUrl",companyInfo:"companyInfo"},outputs:{closed:"closed"},decls:31,vars:20,consts:[["tktFrame",""],["(click).self","close()",1,"pp-overlay"],[1,"pp-modal"],[1,"pp-header"],[1,"pp-header-left"],[1,"material-icons"],[1,"pp-close",3,"click"],[1,"pp-formats"],[1,"pp-body"],[1,"preview-page"],[1,"inv-doc"],["title","Aper\xE7u du ticket",1,"tkt-frame",3,"srcdoc"],[1,"tkt"],[1,"pp-footer"],[1,"pp-btn-cancel",3,"click"],[1,"pp-btn-print",3,"click","disabled"],[1,"fmt-btn",3,"active"],[1,"fmt-btn",3,"click"],[1,"inv-header"],[1,"inv-company"],["alt","logo",1,"inv-co-logo",3,"src"],[1,"inv-co-name"],[1,"inv-co-sub"],[1,"inv-title-block"],[1,"inv-doctype"],[1,"inv-ref"],[1,"inv-meta"],[1,"inv-meta-client"],[1,"inv-meta-lbl"],[1,"inv-meta-val"],[1,"inv-meta-sub"],[1,"inv-meta-dates"],[1,"inv-mrow"],[1,"inv-lines"],[1,"tdesc"],[1,"tr"],[1,"inv-recap"],[1,"tr","trabais"],[1,"inv-totals-wrap"],[1,"inv-totals"],[1,"inv-trow"],[1,"inv-trow","inv-enlevement"],[1,"inv-trow","inv-grand"],[1,"inv-trow","inv-ristourne"],[1,"inv-trow","inv-net"],[1,"inv-trow","inv-paid"],[1,"inv-trow","inv-due"],[1,"inv-lettres"],[1,"inv-sigs"],[1,"inv-sig"],[1,"inv-sig-lbl"],[1,"inv-sig-area"],[1,"tr","tbold-teal"],[1,"tr","tbold"],[1,"tr","trabais-ttc"],[1,"inv-section-hdr"],[1,"inv-consigne"],[1,"inv-section-hdr","inv-decons-hdr"],[1,"inv-rst"],["colspan","2"],["title","Aper\xE7u du ticket",1,"tkt-frame",3,"load","srcdoc"],[1,"tkt-logo"],[1,"tkt-co"],[1,"tkt-phone"],[1,"tkt-sep"],[1,"tkt-type"],[1,"tkt-ref"],[1,"tkt-row"],[1,"tkt-row","sm"],[1,"tkt-total"],[1,"tkt-lettres"],["alt","logo",3,"src"],[1,"tkt-prod-name"],[1,"tkt-prod-row"],[1,"tbold"],[1,"inv-sig-name"],[1,"inv-footer-note"],[1,"tr","tgray"],[1,"inv-trow","inv-deduct"]],template:function(a,d){a&1&&(n(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"span",5),i(5,"print"),e(),n(6,"span"),i(7,"Aper\xE7u avant impression \u2014 "),n(8,"strong"),i(9),e()()(),n(10,"button",6),M("click",function(){return d.close()}),n(11,"span",5),i(12,"close"),e()()(),h(13,pt,3,0,"div",7),h(14,Et,3,0,"div",7),n(15,"div",8)(16,"div",9),h(17,zt,131,35,"div",10),h(18,Dt,2,1,"iframe",11),h(19,qt,44,11,"div",12),h(20,Kt,84,14,"div",10),h(21,oe,89,17,"div",10),e()(),n(22,"div",13)(23,"button",14),M("click",function(){return d.close()}),n(24,"span",5),i(25,"close"),e(),i(26," Fermer "),e(),n(27,"button",15),M("click",function(){return d.print()}),n(28,"span",5),i(29),e(),i(30),e()()()()),a&2&&(o(9),V("",d.docTitle," ",d.docRef),o(4),E(d.docType!=="bon"&&d.docType!=="purchase_order"&&d.docType!=="sales_order"?13:-1),o(),E(d.docType==="purchase_order"||d.docType==="sales_order"?14:-1),o(),F("ticket-mode",d.format==="ticket"),o(),F("page-a4",d.format==="a4")("page-a5",d.format==="a5")("page-ticket",d.format==="ticket"),o(),E((d.docType==="invoice"||d.docType==="avoir")&&d.format!=="ticket"?17:-1),o(),E((d.docType==="invoice"||d.docType==="avoir")&&d.format==="ticket"?18:-1),o(),E(d.docType==="purchase_invoice"&&d.format==="ticket"?19:-1),o(),E(d.docType==="purchase_order"?20:-1),o(),E(d.docType==="sales_order"?21:-1),o(6),I("disabled",d.printing),o(2),r(d.printing?"hourglass_empty":"print"),o(),u(" ",d.printing?"G\xE9n\xE9ration...":"Imprimer"," "))},dependencies:[J],styles:[".pp-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000a6;display:flex;align-items:flex-start;justify-content:center;z-index:9999;padding:20px;overflow-y:auto}.pp-modal[_ngcontent-%COMP%]{background:var(--bg-surface);border-radius:10px;width:100%;max-width:min(1040px,98vw);display:flex;flex-direction:column;max-height:calc(100vh - 40px);box-shadow:0 20px 60px #0006}.pp-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--border);background:var(--bg-hover);border-radius:10px 10px 0 0}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:14px;color:var(--text-primary)}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:var(--accent);font-size:20px}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent)}.pp-close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;color:var(--text-muted);display:flex;align-items:center;border-radius:50%;padding:4px;transition:all .15s}.pp-close[_ngcontent-%COMP%]:hover{background:var(--bg-elevated);color:var(--text-primary)}.pp-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px}.pp-formats[_ngcontent-%COMP%]{display:flex;gap:8px;padding:12px 20px;border-bottom:1px solid var(--border-light);background:var(--bg-surface)}.fmt-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border:1px solid var(--border);border-radius:20px;background:var(--bg-surface);color:var(--text-secondary);font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.fmt-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:15px}.fmt-btn[_ngcontent-%COMP%]:hover{background:var(--bg-hover);border-color:var(--accent)}.fmt-btn.active[_ngcontent-%COMP%]{background:var(--accent);color:#fff;border-color:var(--accent)}.pp-body[_ngcontent-%COMP%]{flex:1;overflow:auto;background:var(--bg-elevated);padding:24px;display:flex;justify-content:flex-start;align-items:flex-start;min-height:420px}.pp-body.ticket-mode[_ngcontent-%COMP%]{padding-top:24px}@media(max-width:640px){.pp-body[_ngcontent-%COMP%]{padding:12px}}.preview-page[_ngcontent-%COMP%]{margin:0 auto;flex-shrink:0;box-shadow:0 4px 24px #00000038;--accent: #059669;--accent-light: #D1FAE5;--success: #16A34A;--danger: #DC2626;--bg-surface: #FFFFFF;--bg-elevated: #F8FAFC;--bg-hover: #F1F5F9;--text-primary: #0F172A;--text-secondary: #475569;--text-muted: #64748B;--border: #E2E8F0;--border-light: #F1F5F9;background:#fff;color:var(--text-primary)}.preview-page.page-a4[_ngcontent-%COMP%]{width:210mm;min-height:297mm}.preview-page.page-a5[_ngcontent-%COMP%]{width:148mm;min-height:210mm}.preview-page.page-ticket[_ngcontent-%COMP%]{width:80mm;min-height:120mm;zoom:1.25}.page-a5[_ngcontent-%COMP%]   .inv-doc[_ngcontent-%COMP%]{padding:8mm;font-size:7.5pt}.page-a5[_ngcontent-%COMP%]   table.inv-lines[_ngcontent-%COMP%]{font-size:7pt}.page-a5[_ngcontent-%COMP%]   table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:6.5pt;padding:3px}.page-a5[_ngcontent-%COMP%]   table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:2px 3px}.page-a5[_ngcontent-%COMP%]   .inv-co-name[_ngcontent-%COMP%]{font-size:12pt}.page-a5[_ngcontent-%COMP%]   .inv-doctype[_ngcontent-%COMP%]{font-size:14pt}.page-a5[_ngcontent-%COMP%]   .inv-meta-val[_ngcontent-%COMP%]{font-size:10pt}.page-a5[_ngcontent-%COMP%]   .inv-trow[_ngcontent-%COMP%]{font-size:7.5pt}.page-a5[_ngcontent-%COMP%]   .inv-totals[_ngcontent-%COMP%]{width:60mm}.inv-doc[_ngcontent-%COMP%]{padding:14mm;font-family:Arial,sans-serif;font-size:9pt;color:var(--text-primary)}.inv-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #222;padding-bottom:4mm;margin-bottom:8mm}.inv-co-logo[_ngcontent-%COMP%]{max-height:48px;max-width:120px;object-fit:contain;display:block;margin-bottom:4px}.inv-co-name[_ngcontent-%COMP%]{font-size:15pt;font-weight:700;color:var(--accent)}.inv-co-sub[_ngcontent-%COMP%]{font-size:9pt;color:var(--text-secondary);margin-top:2px}.inv-title-block[_ngcontent-%COMP%]{text-align:right}.inv-doctype[_ngcontent-%COMP%]{font-size:18pt;font-weight:800;letter-spacing:1px}.inv-ref[_ngcontent-%COMP%]{font-size:11pt;font-weight:600;color:var(--accent);margin-top:2px}.inv-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:8mm}.inv-meta-lbl[_ngcontent-%COMP%]{font-size:7pt;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:2px}.inv-meta-val[_ngcontent-%COMP%]{font-size:12pt;font-weight:700}.inv-meta-sub[_ngcontent-%COMP%]{font-size:8pt;color:var(--text-secondary)}.inv-meta-dates[_ngcontent-%COMP%]{text-align:right}.inv-mrow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;font-size:9pt;margin-bottom:2px}.inv-mrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:var(--text-muted);font-size:8pt}table.inv-lines[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:6mm;font-size:8.5pt}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:var(--accent);color:#fff}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px 6px;text-align:left;font-weight:600;font-size:7.5pt}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:var(--bg-elevated)}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px 6px;border-bottom:1px solid #e8e8e8}table.inv-lines[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:2px solid var(--accent);padding:4px 6px;background:var(--bg-elevated)}.tdesc[_ngcontent-%COMP%]{max-width:110px;word-break:break-word}.tr[_ngcontent-%COMP%]{text-align:right}.tbold[_ngcontent-%COMP%]{font-weight:700}.tbold-teal[_ngcontent-%COMP%]{font-weight:700;color:var(--accent)}.trabais[_ngcontent-%COMP%]{color:#e65100;font-weight:600}.trabais-ttc[_ngcontent-%COMP%]{color:#c0392b;font-weight:700}.tgray[_ngcontent-%COMP%]{color:var(--text-muted);font-size:7.5pt}.inv-section-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:var(--accent-light);font-size:7pt;font-weight:700;color:var(--accent);text-transform:uppercase;padding:3px 6px}.inv-decons-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#fff3e0;color:#e67e22}.inv-consigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .inv-rst[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:var(--bg-hover);color:var(--text-secondary);font-size:8pt}.inv-red[_ngcontent-%COMP%]{color:var(--danger)}.inv-recap[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:6px;font-size:7.5pt}.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:var(--accent-light)}.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:3px 5px;font-weight:700;color:var(--accent);text-align:right;border:1px solid #cde;font-size:7pt}.inv-recap[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px 5px;border:1px solid #e0e0e0;background:#fafafa;font-weight:600}.inv-totals-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:5mm}.inv-totals[_ngcontent-%COMP%]{width:72mm}.inv-trow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:2px 6px;font-size:9pt;border-bottom:1px solid #eee}.inv-grand[_ngcontent-%COMP%]{font-weight:700;background:var(--bg-elevated)}.inv-net[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;background:var(--accent);color:#fff;padding:4px 6px}.inv-deduct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--danger)}.inv-ristourne[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.inv-enlevement[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:#c60;font-weight:600}.inv-paid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.inv-due[_ngcontent-%COMP%]{font-weight:700;color:var(--danger)}.inv-total-lbl[_ngcontent-%COMP%]{font-size:8.5pt;font-weight:700}.inv-total-val[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;color:var(--accent)}.inv-lettres[_ngcontent-%COMP%]{font-size:8.5pt;font-style:italic;border-top:1px solid var(--border);padding-top:3mm;margin-bottom:8mm}.inv-sigs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10mm;margin-top:8mm}.inv-sig[_ngcontent-%COMP%]{flex:1}.inv-sig-lbl[_ngcontent-%COMP%]{font-size:8pt;font-weight:700;margin-bottom:2mm}.inv-sig-name[_ngcontent-%COMP%]{font-size:8pt;color:var(--text-secondary);margin-bottom:2mm}.inv-sig-area[_ngcontent-%COMP%]{height:20mm;border:1px solid #aaa;border-radius:2px}.inv-footer-note[_ngcontent-%COMP%]{font-size:7pt;color:var(--text-muted);text-align:center;margin-top:6mm;border-top:1px solid #eee;padding-top:2mm}.tkt[_ngcontent-%COMP%]{width:80mm;padding:3mm 4mm;font-family:Courier New,monospace;font-size:8pt;font-weight:700}.tkt-logo[_ngcontent-%COMP%]{text-align:center;margin-bottom:2mm}.tkt-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:32px;max-width:60mm;object-fit:contain}.tkt-co[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;text-align:center;margin-bottom:1mm}.tkt-phone[_ngcontent-%COMP%]{font-size:7.5pt;text-align:center;color:var(--text-secondary);margin-bottom:2mm}.tkt-sep[_ngcontent-%COMP%]{border-top:1px dashed #666;margin:2mm 0}.tkt-type[_ngcontent-%COMP%]{font-size:12pt;font-weight:800;text-align:center;letter-spacing:2px;margin:1mm 0}.tkt-ref[_ngcontent-%COMP%]{font-size:9pt;font-weight:700;text-align:center;color:var(--text-primary);margin-bottom:2mm}.tkt-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:8pt;margin:1px 0}.tkt-row.sm[_ngcontent-%COMP%]{font-size:7.5pt;color:var(--text-secondary)}.tkt-prod-name[_ngcontent-%COMP%]{font-size:7.5pt;margin-top:1mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tkt-prod-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:7.5pt;margin-bottom:1mm;padding-left:2mm}.tkt-sep-label[_ngcontent-%COMP%]{text-align:center;font-size:7pt;color:var(--text-muted);padding:1mm 0}.tkt-sep-dots[_ngcontent-%COMP%]{border-top:1px dotted #666;margin:2mm 0}.tkt-subtotal[_ngcontent-%COMP%]{font-weight:700;border-top:1px solid #333;padding-top:1px}.tkt-ristourne-hdr[_ngcontent-%COMP%]{font-size:7pt;font-weight:800;text-align:center;color:var(--success);padding:2px 0;text-transform:uppercase;letter-spacing:1px}.tkt-ristourne-tot[_ngcontent-%COMP%]{font-weight:700}.tkt-ristourne-tot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--success)}.tkt-sig-box[_ngcontent-%COMP%]{width:100%;margin-top:2mm}.tkt-sig-lbl[_ngcontent-%COMP%]{font-size:7.5pt;font-weight:700;margin-bottom:1mm;text-align:center}.tkt-sig-name[_ngcontent-%COMP%]{font-size:7pt;color:var(--text-muted);margin-bottom:1mm}.tkt-sig-area[_ngcontent-%COMP%]{height:18mm;border:1px solid #999;border-radius:2px;width:100%}.tkt-total[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:11pt;font-weight:800;border-top:2px solid #111;border-bottom:2px solid #111;padding:1mm 0;margin:2mm 0}.tkt-lettres[_ngcontent-%COMP%]{font-size:6.5pt;font-style:italic;text-align:center;margin:2mm 0;color:var(--text-secondary)}.tkt-thanks[_ngcontent-%COMP%]{font-size:8.5pt;text-align:center;font-weight:700;margin:2mm 0}.tkt-sig[_ngcontent-%COMP%]{font-size:8pt;text-align:center;margin-top:4mm}.tkt[_ngcontent-%COMP%], .tkt[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-weight:800!important;color:#000!important}.pp-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:14px 20px;border-top:1px solid var(--border);background:var(--bg-hover);border-radius:0 0 10px 10px}.pp-btn-cancel[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border:1px solid var(--border);border-radius:6px;background:var(--bg-surface);color:var(--text-secondary);font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-cancel[_ngcontent-%COMP%]:hover{background:var(--bg-hover)}.pp-btn-print[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 20px;background:var(--accent);color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-print[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--accent)}.pp-btn-print[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.tkt-frame[_ngcontent-%COMP%]{display:block;width:80mm;min-height:120mm;border:0;background:#fff}"]})}}return s})(),it=`
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
`,U=it+`
body { font-size: 9pt; }
@page { size: A4 portrait; }
`,B=it+`
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
`,tt=`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #000; font-family: 'Times New Roman', Times, serif; font-size: 9.5pt; width: 80mm; }
.ticket { width: 80mm; padding: 3mm 4mm; }
.t-logo { text-align: center; margin-bottom: 2mm; } .t-logo img { max-height: 32px; max-width: 60mm; object-fit: contain; }
.t-company { font-size: 11pt; text-align: center; padding-bottom: 1mm; border-bottom: 1px solid #999; margin-bottom: 1.5mm; }
.t-coinfo { font-size: 9pt; text-align: right; line-height: 1.25; }
.t-sep { border-top: 1px solid #999; margin: 2mm 0; }
.t-kv { font-size: 9.5pt; line-height: 1.3; }
.t-kv b { font-weight: 700; }
table.t-grid { width: 100%; border-collapse: collapse; margin: 3mm 0; font-size: 9pt; }
table.t-grid th { text-align: left; font-weight: 700; padding: 1.5mm 1mm; border-bottom: 1.5px solid #000; }
table.t-grid td { padding: 1.2mm 1mm; border-bottom: 1px solid #ddd; vertical-align: top; }
table.t-grid .r { text-align: right; }
table.t-grid .nowrap { white-space: nowrap; }
tr.t-sec td { font-weight: 400; padding-top: 1.5mm; }
tr.t-tot td { font-weight: 700; }
table.t-annex { margin-top: 4mm; }
.t-block { margin: 3mm 0; }
.t-line { display: flex; justify-content: space-between; gap: 3mm; font-size: 9.5pt; line-height: 1.35; }
.t-line span:last-child { white-space: nowrap; text-align: right; }
.t-net { text-align: center; font-size: 11pt; font-weight: 700; margin: 4mm 0 1mm; }
.t-lettres { font-size: 8pt; font-style: italic; text-align: center; margin-bottom: 3mm; }
.t-sig-title { margin-top: 5mm; font-size: 9.5pt; }
.t-sig-row { display: flex; gap: 3mm; margin-top: 2mm; }
.t-sig-cell { flex: 1; }
.t-sig-lbl { font-size: 8.5pt; text-align: center; margin-bottom: 1mm; }
.t-sig-area { height: 16mm; border: 1px solid #999; }
.t-thanks { font-size: 9pt; text-align: center; margin: 3mm 0 1mm; }
/* Lignes de fournisseurs (ticket achats) */
table.t-lines { width: 100%; border-collapse: collapse; margin: 1mm 0; }
table.t-lines td { padding: 1px 2px; font-size: 8.5pt; vertical-align: top; }
.tname { max-width: 40mm; }
.sep td { text-align: center; font-size: 8.5pt; padding: 3px 0; border-top: 1px dotted #666; border-bottom: 1px dotted #666; }
.r { text-align: right; }
.t-doctype { font-size: 12pt; text-align: center; margin: 1mm 0; }
.t-ref { font-size: 10pt; text-align: center; margin-bottom: 2mm; }
.t-line.small { font-size: 8.5pt; }
.t-subtotal { border-top: 1px solid #333; padding-top: 1px; }
.t-total { display: flex; justify-content: space-between; font-size: 11pt; font-weight: 700; margin: 2mm 0; border-top: 2px solid #000; border-bottom: 2px solid #000; padding: 1mm 0; }
.t-sig-box { width: 100%; margin-top: 2mm; }
.t-sig-gap { height: 3mm; }
.t-sig-name { font-size: 8pt; margin-bottom: 1mm; }
/* Thermique : noir franc et graisse soutenue \u2014 les traits fins ressortent p\xE2les \xE0 l'impression */
.ticket, .ticket * { color: #000 !important; font-weight: 600; }
.ticket b, .ticket th, .ticket .t-net, .ticket tr.t-tot td, .ticket .t-company { font-weight: 800 !important; }
@page { size: 80mm auto; margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`,se=U;function at(s){if(s===0)return"Z\xE9ro";if(s<0)return"Moins "+at(-s);let c=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"],t=["","","vingt","trente","quarante","cinquante","soixante","soixante","quatre-vingt","quatre-vingt"];function a(m){if(m<20)return c[m];let T=Math.floor(m/10),g=m%10;if(T===7)return"soixante-"+(g===1?"et-onze":c[10+g]);if(T===9)return"quatre-vingt-"+(g===0?"":c[g]).replace(/^-/,"");let f=t[T];return g===0?f+(T===8?"s":""):g===1&&T!==8?f+"-et-un":f+"-"+c[g]}function d(m){if(m<100)return a(m);let T=Math.floor(m/100),g=m%100,f=T===1?"cent":a(T)+" cent";return g===0?f+(T>1?"s":""):f+" "+a(g)}let l=[],x=Math.floor(s/1e9);s%=1e9;let b=Math.floor(s/1e6);s%=1e6;let C=Math.floor(s/1e3);s%=1e3;let P=s;x&&l.push(d(x)+(x===1?" milliard":" milliards")),b&&l.push(d(b)+(b===1?" million":" millions")),C&&l.push(C===1?"mille":d(C)+" mille"),P&&l.push(d(P));let y=l.join(" ").trim().replace(/\s+/g," ");return y.charAt(0).toUpperCase()+y.slice(1)}export{ct as a,G as b,ue as c};
