import{$a as I,Ja as p,Ka as v,La as C,Na as f,Oa as g,P as k,Q as N,Ta as n,Ua as e,V as z,Va as u,Wb as L,Ya as A,Za as V,ab as r,gb as w,ib as i,jb as l,kb as c,lb as $,ma as a,wb as F,ya as R}from"./chunk-CNLODZDV.js";var H=()=>[],U=(o,s)=>s.value;function G(o,s){if(o&1){let t=A();n(0,"button",15),I("click",function(){let m=k(t).$implicit,E=r(2);return N(E.setFormat(m.value))}),n(1,"span",4),i(2),e(),i(3),e()}if(o&2){let t=s.$implicit,d=r(2);w("active",d.format===t.value),a(2),l(t.icon),a(),c(" ",t.label," ")}}function Q(o,s){if(o&1&&(n(0,"div",6),f(1,G,4,4,"button",14,U),e()),o&2){let t=r();a(),g(t.FORMATS)}}function Y(o,s){if(o&1){let t=A();n(0,"button",15),I("click",function(){k(t);let m=r().$implicit,E=r(2);return N(E.setFormat(m.value))}),n(1,"span",4),i(2),e(),i(3),e()}if(o&2){let t=r().$implicit,d=r(2);w("active",d.format===t.value),a(2),l(t.icon),a(),c(" ",t.label," ")}}function K(o,s){if(o&1&&p(0,Y,4,4,"button",14),o&2){let t=s.$implicit;v(t.value!=="ticket"?0:-1)}}function W(o,s){if(o&1&&(n(0,"div",6),f(1,K,1,1,null,null,U),e()),o&2){let t=r();a(),g(t.FORMATS)}}function Z(o,s){if(o&1&&(n(0,"div",19),i(1),e()),o&2){let t=r(2);a(),c("T\xE9l : ",t.companyPhone)}}function J(o,s){if(o&1&&(n(0,"div",27),i(1),e()),o&2){let t=r(2);a(),l(t.invoice==null?null:t.invoice.warehouseName)}}function X(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.invoice==null?null:t.invoice.dateEcheance))}}function tt(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Commande"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.invoice==null?null:t.invoice.salesOrderName)}}function et(o,s){if(o&1&&(n(0,"tr")(1,"td"),i(2),e(),n(3,"td",31),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",32),i(8),e(),n(9,"td",32),i(10),e(),n(11,"td",32),i(12),e(),n(13,"td",32),i(14),e(),n(15,"td",46),i(16),e()()),o&2){let t=s.$implicit,d=r(2);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(2),l(d.fmt(t.prixUnitaire)),a(2),l(t.tauxRemise?t.tauxRemise+"%":"\u2014"),a(2),l(d.fmt(t.montantHT)),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(d.fmt(t.montantTTC))}}function nt(o,s){if(o&1&&(n(0,"tr",49)(1,"td"),i(2),e(),n(3,"td",31),i(4),e(),n(5,"td",32),i(6),e(),u(7,"td",50)(8,"td"),n(9,"td",32),i(10),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(4),l(d.fmt(t.montantTTC))}}function it(o,s){if(o&1&&(n(0,"tr",47)(1,"td",48),i(2,"CONSIGNES"),e()(),f(3,nt,11,4,"tr",49,C)),o&2){let t=r(2);a(3),g(t.consigneLines)}}function at(o,s){if(o&1&&(n(0,"tr",51)(1,"td",52),i(2),e(),n(3,"td",32),i(4),e(),n(5,"td",32),i(6),e(),u(7,"td"),n(8,"td",32),i(9),e(),u(10,"td"),n(11,"td",53),i(12),e()()),o&2){let t=s.$implicit,d=r(3);a(2),l(t.categoryName),a(2),l(d.fmt(t.quantite)),a(2),l(d.fmt(t.montantUnitaire)),a(3),l(d.fmt(t.montantTotal)),a(3),c("\u2013 ",d.fmt(t.montantTotal))}}function ot(o,s){if(o&1&&(n(0,"tr",47)(1,"td",48),i(2,"RISTOURNES"),e()(),f(3,at,13,5,"tr",51,C)),o&2){let t=r(2);a(3),g(t.invoice==null?null:t.invoice.ristourneDetails)}}function dt(o,s){if(o&1&&(n(0,"div",37)(1,"span"),i(2,"Pr\xE9compte (\u2212)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.invoice==null?null:t.invoice.totalPrecompte)," F")}}function lt(o,s){if(o&1&&(n(0,"div",37)(1,"span"),i(2,"Ristournes (\u2212)"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.invoice==null?null:t.invoice.totalRistourne)," F")}}function mt(o,s){if(o&1&&(n(0,"div",35)(1,"span"),i(2,"Frais d'enl\xE8vement"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.invoice==null?null:t.invoice.fraisEnlevementTTC)," F")}}function st(o,s){if(o&1&&(n(0,"div",39)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.invoice==null?null:t.invoice.montantPaye)," F")}}function rt(o,s){if(o&1&&(n(0,"div",40)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.invoice==null?null:t.invoice.montantDu)," F")}}function ct(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17)(3,"div",18),i(4),e(),p(5,Z,2,1,"div",19),e(),n(6,"div",20)(7,"div",21),i(8),e(),n(9,"div",22),i(10),e()()(),n(11,"div",23)(12,"div",24)(13,"div",25),i(14,"CLIENT"),e(),n(15,"div",26),i(16),e(),p(17,J,2,1,"div",27),e(),n(18,"div",28)(19,"div",29)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),p(24,X,5,1,"div",29),p(25,tt,5,1,"div",29),e()(),n(26,"table",30)(27,"thead")(28,"tr")(29,"th"),i(30,"Code"),e(),n(31,"th",31),i(32,"D\xE9signation"),e(),n(33,"th",32),i(34,"Qt\xE9"),e(),n(35,"th",32),i(36,"P.U.HT"),e(),n(37,"th",32),i(38,"Remise"),e(),n(39,"th",32),i(40,"Mnt HT"),e(),n(41,"th",32),i(42,"TVA"),e(),n(43,"th",32),i(44,"Mnt TTC"),e()()(),n(45,"tbody"),f(46,et,17,8,"tr",null,C),p(48,it,5,0),p(49,ot,5,0),e()(),n(50,"div",33)(51,"div",34)(52,"div",35)(53,"span"),i(54,"Total HT"),e(),n(55,"span"),i(56),e()(),n(57,"div",35)(58,"span"),i(59,"TVA (19,25%)"),e(),n(60,"span"),i(61),e()(),n(62,"div",36)(63,"span"),i(64,"Total TTC"),e(),n(65,"span"),i(66),e()(),p(67,dt,5,1,"div",37),p(68,lt,5,1,"div",37),p(69,mt,5,1,"div",35),n(70,"div",38)(71,"span"),i(72,"NET \xC0 PAYER"),e(),n(73,"span"),i(74),e()(),p(75,st,5,1,"div",39),p(76,rt,5,1,"div",40),e()(),n(77,"div",41),i(78," Arr\xEAt\xE9 \xE0 la somme de : "),n(79,"strong"),i(80),e()(),n(81,"div",42)(82,"div",43)(83,"div",44),i(84,"Signature du livreur"),e(),u(85,"div",45),e(),n(86,"div",43)(87,"div",44),i(88,"Cachet et signature du client"),e(),u(89,"div",45),e()()()),o&2){let t=r();a(4),l(t.companyName),a(),v(t.companyPhone?5:-1),a(3),l(t.docTitle),a(2),l(t.invoice==null?null:t.invoice.name),a(6),l(t.invoice==null?null:t.invoice.partnerName),a(),v(t.invoice!=null&&t.invoice.warehouseName?17:-1),a(6),l(t.fmtDate(t.invoice==null?null:t.invoice.date)),a(),v(t.invoice!=null&&t.invoice.dateEcheance?24:-1),a(),v(t.invoice!=null&&t.invoice.salesOrderName?25:-1),a(21),g(t.salesLines),a(2),v(t.consigneLines.length?48:-1),a(),v(!(t.invoice==null||t.invoice.ristourneDetails==null)&&t.invoice.ristourneDetails.length?49:-1),a(7),c("",t.fmt(t.invoice==null?null:t.invoice.totalHT)," F"),a(5),c("",t.fmt(t.invoice==null?null:t.invoice.totalTVA)," F"),a(5),c("",t.fmt(t.invoice==null?null:t.invoice.totalTTC)," F"),a(),v(t.invoice!=null&&t.invoice.totalPrecompte?67:-1),a(),v(t.invoice!=null&&t.invoice.totalRistourne?68:-1),a(),v(t.invoice!=null&&t.invoice.fraisEnlevementTTC?69:-1),a(5),c("",t.fmt((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))," F"),a(),v(t.invoice!=null&&t.invoice.montantPaye?75:-1),a(),v(t.invoice!=null&&t.invoice.montantDu?76:-1),a(4),l(t.montantEnLettres((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC)))}}function pt(o,s){if(o&1&&(n(0,"div",55),i(1),e()),o&2){let t=r(2);a(),l(t.companyPhone)}}function vt(o,s){if(o&1&&(n(0,"div",65),i(1),e(),n(2,"div",66)(3,"span"),i(4),e(),n(5,"span",67),i(6),e()()),o&2){let t=s.$implicit,d=r(2);a(),l(t.description||t.productCode),a(3),$("",d.fmt(t.quantity)," \xD7 ",d.fmt(t.prixUnitaire)),a(2),c("",d.fmt(t.montantTTC)," F")}}function Et(o,s){if(o&1&&(n(0,"div",65),i(1),e(),n(2,"div",66)(3,"span"),i(4),e(),n(5,"span"),i(6),e()()),o&2){let t=s.$implicit,d=r(3);a(),l(t.description),a(3),l(d.fmt(t.quantity)),a(2),c("",d.fmt(t.montantTTC)," F")}}function ut(o,s){if(o&1&&(n(0,"div",68),i(1,"\u2014 Consignes \u2014"),e(),f(2,Et,7,3,null,null,C)),o&2){let t=r(2);a(2),g(t.consigneLines)}}function xt(o,s){if(o&1&&(n(0,"div",60)(1,"span"),i(2,"Pr\xE9compte"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("\u2013 ",t.fmt(t.invoice==null?null:t.invoice.totalPrecompte)," F")}}function _t(o,s){if(o&1&&(n(0,"div",60)(1,"span"),i(2,"Frais enl\xE8v."),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.invoice==null?null:t.invoice.fraisEnlevementTTC)," F")}}function ht(o,s){if(o&1&&(n(0,"div",60)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.invoice==null?null:t.invoice.montantDu)," F")}}function ft(o,s){if(o&1&&(n(0,"div",10)(1,"div",54),i(2),e(),p(3,pt,2,1,"div",55),u(4,"div",56),n(5,"div",57),i(6),e(),n(7,"div",58),i(8),e(),u(9,"div",56),n(10,"div",59)(11,"span"),i(12,"Date"),e(),n(13,"span"),i(14),e()(),n(15,"div",59)(16,"span"),i(17,"Client"),e(),n(18,"span"),i(19),e()(),u(20,"div",56),f(21,vt,7,4,null,null,C),p(23,ut,4,0),u(24,"div",56),n(25,"div",60)(26,"span"),i(27,"Total HT"),e(),n(28,"span"),i(29),e()(),n(30,"div",60)(31,"span"),i(32,"TVA 19,25%"),e(),n(33,"span"),i(34),e()(),p(35,xt,5,1,"div",60),p(36,_t,5,1,"div",60),u(37,"div",56),n(38,"div",61)(39,"span"),i(40,"NET \xC0 PAYER"),e(),n(41,"span"),i(42),e()(),p(43,ht,5,1,"div",60),u(44,"div",56),n(45,"div",62),i(46),e(),n(47,"div",63),i(48,"Merci de votre confiance !"),e(),n(49,"div",64),i(50,"Signature : ____________________"),e()()),o&2){let t=r();a(2),l(t.companyName),a(),v(t.companyPhone?3:-1),a(3),l(t.docTitle),a(2),l(t.invoice==null?null:t.invoice.name),a(6),l(t.fmtDate(t.invoice==null?null:t.invoice.date)),a(5),l(t.invoice==null?null:t.invoice.partnerName),a(2),g(t.salesLines),a(2),v(t.consigneLines.length?23:-1),a(6),c("",t.fmt(t.invoice==null?null:t.invoice.totalHT)," F"),a(5),c("",t.fmt(t.invoice==null?null:t.invoice.totalTVA)," F"),a(),v(t.invoice!=null&&t.invoice.totalPrecompte?35:-1),a(),v(t.invoice!=null&&t.invoice.fraisEnlevementTTC?36:-1),a(6),c("",t.fmt((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC))," F"),a(),v(t.invoice!=null&&t.invoice.montantDu?43:-1),a(3),l(t.montantEnLettres((t.invoice==null?null:t.invoice.netAPayer)??(t.invoice==null?null:t.invoice.totalTTC)))}}function gt(o,s){if(o&1&&(n(0,"div",19),i(1),e()),o&2){let t=r(2);a(),c("T\xE9l : ",t.companyPhone)}}function Ct(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Origine"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.picking==null?null:t.picking.origin)}}function Tt(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.picking==null?null:t.picking.notes)}}function Pt(o,s){if(o&1&&(n(0,"tr")(1,"td",73),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",31),i(6),e(),n(7,"td",32),i(8),e(),n(9,"td",46),i(10),e(),n(11,"td"),i(12),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.productName),a(2),l(m.fmt(t.qtyDemanded)),a(2),l(m.fmt(t.qtyDone??t.qtyDemanded)),a(2),l(t.uomName)}}function St(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17)(3,"div",18),i(4),e(),p(5,gt,2,1,"div",19),e(),n(6,"div",20)(7,"div",21),i(8,"BON DE LIVRAISON"),e(),n(9,"div",22),i(10),e()()(),n(11,"div",23)(12,"div",24)(13,"div",25),i(14,"CLIENT / DESTINATAIRE"),e(),n(15,"div",26),i(16),e()(),n(17,"div",28)(18,"div",29)(19,"span"),i(20,"Date"),e(),n(21,"span"),i(22),e()(),p(23,Ct,5,1,"div",29),p(24,Tt,5,1,"div",29),e()(),n(25,"table",30)(26,"thead")(27,"tr")(28,"th",32),i(29,"#"),e(),n(30,"th"),i(31,"Code"),e(),n(32,"th",31),i(33,"D\xE9signation"),e(),n(34,"th",32),i(35,"Qt\xE9 dem."),e(),n(36,"th",32),i(37,"Qt\xE9 livr\xE9e"),e(),n(38,"th"),i(39,"U.M."),e()()(),n(40,"tbody"),f(41,Pt,13,6,"tr",null,C),e(),n(43,"tfoot")(44,"tr")(45,"td",69),i(46,"TOTAL COLIS LIVR\xC9S"),e(),n(47,"td",70),i(48),e(),u(49,"td"),e()()(),n(50,"div",42)(51,"div",43)(52,"div",44),i(53,"Signature du livreur"),e(),n(54,"div",71),i(55,"Nom : ________________________"),e(),u(56,"div",45),e(),n(57,"div",43)(58,"div",44),i(59,"Cachet et signature du client"),e(),n(60,"div",71),i(61,"Nom : ________________________"),e(),u(62,"div",45),e()(),n(63,"div",72),i(64),e()()),o&2){let t=r();a(4),l(t.companyName),a(),v(t.companyPhone?5:-1),a(5),l(t.picking==null?null:t.picking.name),a(6),l((t.picking==null?null:t.picking.partnerName)||"\u2014"),a(6),l(t.fmtDate(t.picking==null?null:t.picking.scheduledDate)),a(),v(t.picking!=null&&t.picking.origin?23:-1),a(),v(t.picking!=null&&t.picking.notes?24:-1),a(17),g(t.pickingMoves),a(7),l(t.fmt(t.totalPickingQty)),a(16),c("Document non contractuel \xB7 ",t.companyName)}}function bt(o,s){if(o&1&&(n(0,"div",19),i(1),e()),o&2){let t=r(2);a(),c("T\xE9l : ",t.companyPhone)}}function yt(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.dateEcheance))}}function It(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Commande"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseInvoice==null?null:t.purchaseInvoice.purchaseOrderName)}}function wt(o,s){if(o&1&&(n(0,"tr")(1,"td"),i(2),e(),n(3,"td",31),i(4),e(),n(5,"td",32),i(6),e(),n(7,"td",32),i(8),e(),n(9,"td",32),i(10),e(),n(11,"td",32),i(12),e(),n(13,"td",46),i(14),e()()),o&2){let t=s.$implicit,d=r(2);a(2),l(t.productCode),a(2),l(t.description),a(2),l(d.fmt(t.quantity)),a(2),l(d.fmt(t.prixUnitaire)),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(d.fmt(t.montantHT)),a(2),l(d.fmt(t.montantTTC))}}function Ot(o,s){if(o&1&&(n(0,"div",35)(1,"span"),i(2,"PSA"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalPrecompte)," F")}}function $t(o,s){if(o&1&&(n(0,"div",39)(1,"span"),i(2,"D\xE9j\xE0 pay\xE9"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.montantPaye)," F")}}function Mt(o,s){if(o&1&&(n(0,"div",40)(1,"span"),i(2,"Reste d\xFB"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.montantDu)," F")}}function kt(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17)(3,"div",18),i(4),e(),p(5,bt,2,1,"div",19),e(),n(6,"div",20)(7,"div",21),i(8),e(),n(9,"div",22),i(10),e()()(),n(11,"div",23)(12,"div",24)(13,"div",25),i(14,"FOURNISSEUR"),e(),n(15,"div",26),i(16),e()(),n(17,"div",28)(18,"div",29)(19,"span"),i(20,"Date"),e(),n(21,"span"),i(22),e()(),p(23,yt,5,1,"div",29),p(24,It,5,1,"div",29),e()(),n(25,"table",30)(26,"thead")(27,"tr")(28,"th"),i(29,"Code"),e(),n(30,"th",31),i(31,"D\xE9signation"),e(),n(32,"th",32),i(33,"Qt\xE9"),e(),n(34,"th",32),i(35,"P.U.HT"),e(),n(36,"th",32),i(37,"TVA"),e(),n(38,"th",32),i(39,"Mnt HT"),e(),n(40,"th",32),i(41,"Mnt TTC"),e()()(),n(42,"tbody"),f(43,wt,15,7,"tr",null,C),e()(),n(45,"div",33)(46,"div",34)(47,"div",35)(48,"span"),i(49,"Total HT"),e(),n(50,"span"),i(51),e()(),n(52,"div",35)(53,"span"),i(54,"TVA"),e(),n(55,"span"),i(56),e()(),n(57,"div",36)(58,"span"),i(59,"Total TTC"),e(),n(60,"span"),i(61),e()(),p(62,Ot,5,1,"div",35),n(63,"div",38)(64,"span"),i(65,"NET \xC0 PAYER"),e(),n(66,"span"),i(67),e()(),p(68,$t,5,1,"div",39),p(69,Mt,5,1,"div",40),e()(),n(70,"div",41),i(71," Arr\xEAt\xE9 \xE0 la somme de : "),n(72,"strong"),i(73),e()(),n(74,"div",42)(75,"div",43)(76,"div",44),i(77,"Signature du fournisseur"),e(),u(78,"div",45),e(),n(79,"div",43)(80,"div",44),i(81,"Cachet et signature"),e(),u(82,"div",45),e()()()),o&2){let t=r();a(4),l(t.companyName),a(),v(t.companyPhone?5:-1),a(3),l(t.docTitle),a(2),l(t.purchaseInvoice==null?null:t.purchaseInvoice.name),a(6),l(t.purchaseInvoice==null?null:t.purchaseInvoice.partnerName),a(6),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.date)),a(),v(t.purchaseInvoice!=null&&t.purchaseInvoice.dateEcheance?23:-1),a(),v(t.purchaseInvoice!=null&&t.purchaseInvoice.purchaseOrderName?24:-1),a(19),g(t.purchaseInvoiceLines),a(8),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalHT)," F"),a(5),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTVA)," F"),a(5),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)," F"),a(),v(t.purchaseInvoice!=null&&t.purchaseInvoice.totalPrecompte?62:-1),a(5),c("",t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC))," F"),a(),v(t.purchaseInvoice!=null&&t.purchaseInvoice.montantPaye?68:-1),a(),v(t.purchaseInvoice!=null&&t.purchaseInvoice.montantDu?69:-1),a(4),l(t.montantEnLettres((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)))}}function Nt(o,s){if(o&1&&(n(0,"div",55),i(1),e()),o&2){let t=r(2);a(),l(t.companyPhone)}}function At(o,s){if(o&1&&(n(0,"div",65),i(1),e(),n(2,"div",66)(3,"span"),i(4),e(),n(5,"span",67),i(6),e()()),o&2){let t=s.$implicit,d=r(2);a(),l(t.description||t.productCode),a(3),$("",d.fmt(t.quantity)," \xD7 ",d.fmt(t.prixUnitaire)),a(2),c("",d.fmt(t.montantTTC)," F")}}function Ft(o,s){if(o&1&&(n(0,"div",10)(1,"div",54),i(2),e(),p(3,Nt,2,1,"div",55),u(4,"div",56),n(5,"div",57),i(6),e(),n(7,"div",58),i(8),e(),u(9,"div",56),n(10,"div",59)(11,"span"),i(12,"Date"),e(),n(13,"span"),i(14),e()(),n(15,"div",59)(16,"span"),i(17,"Fournisseur"),e(),n(18,"span"),i(19),e()(),u(20,"div",56),f(21,At,7,4,null,null,C),u(23,"div",56),n(24,"div",60)(25,"span"),i(26,"Total HT"),e(),n(27,"span"),i(28),e()(),n(29,"div",60)(30,"span"),i(31,"TVA"),e(),n(32,"span"),i(33),e()(),u(34,"div",56),n(35,"div",61)(36,"span"),i(37,"NET \xC0 PAYER"),e(),n(38,"span"),i(39),e()(),u(40,"div",56),n(41,"div",62),i(42),e()()),o&2){let t=r();a(2),l(t.companyName),a(),v(t.companyPhone?3:-1),a(3),l(t.docTitle),a(2),l(t.purchaseInvoice==null?null:t.purchaseInvoice.name),a(6),l(t.fmtDate(t.purchaseInvoice==null?null:t.purchaseInvoice.date)),a(5),l(t.purchaseInvoice==null?null:t.purchaseInvoice.partnerName),a(2),g(t.purchaseInvoiceLines),a(7),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalHT)," F"),a(5),c("",t.fmt(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTVA)," F"),a(6),c("",t.fmt((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC))," F"),a(3),l(t.montantEnLettres((t.purchaseInvoice==null?null:t.purchaseInvoice.netAPayer)??(t.purchaseInvoice==null?null:t.purchaseInvoice.totalTTC)))}}function Dt(o,s){if(o&1&&(n(0,"div",19),i(1),e()),o&2){let t=r(2);a(),c("T\xE9l : ",t.companyPhone)}}function zt(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Livraison pr\xE9vue"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.dateExpected))}}function Rt(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.purchaseOrder==null?null:t.purchaseOrder.notes)}}function Vt(o,s){if(o&1&&(n(0,"tr")(1,"td",73),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",31),i(6),e(),n(7,"td",32),i(8),e(),n(9,"td",32),i(10),e(),n(11,"td",32),i(12),e(),n(13,"td",32),i(14),e(),n(15,"td",46),i(16),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.description),a(2),l(m.fmt(t.quantity)),a(2),l(m.fmt(t.prixUnitaire)),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(m.fmt(t.montantHT)),a(2),l(m.fmt(t.montantTTC))}}function Lt(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17)(3,"div",18),i(4),e(),p(5,Dt,2,1,"div",19),e(),n(6,"div",20)(7,"div",21),i(8,"BON DE COMMANDE"),e(),n(9,"div",22),i(10),e()()(),n(11,"div",23)(12,"div",24)(13,"div",25),i(14,"FOURNISSEUR"),e(),n(15,"div",26),i(16),e()(),n(17,"div",28)(18,"div",29)(19,"span"),i(20,"Date"),e(),n(21,"span"),i(22),e()(),p(23,zt,5,1,"div",29),p(24,Rt,5,1,"div",29),e()(),n(25,"table",30)(26,"thead")(27,"tr")(28,"th",32),i(29,"#"),e(),n(30,"th"),i(31,"Code"),e(),n(32,"th",31),i(33,"D\xE9signation"),e(),n(34,"th",32),i(35,"Qt\xE9"),e(),n(36,"th",32),i(37,"P.U. HT"),e(),n(38,"th",32),i(39,"TVA"),e(),n(40,"th",32),i(41,"Total HT"),e(),n(42,"th",32),i(43,"Total TTC"),e()()(),n(44,"tbody"),f(45,Vt,17,8,"tr",null,C),e()(),n(47,"div",33)(48,"div",34)(49,"div",35)(50,"span"),i(51,"Total HT"),e(),n(52,"span"),i(53),e()(),n(54,"div",35)(55,"span"),i(56,"TVA (19,25%)"),e(),n(57,"span"),i(58),e()(),n(59,"div",38)(60,"span"),i(61,"TOTAL TTC"),e(),n(62,"span"),i(63),e()()()(),n(64,"div",41),i(65," Arr\xEAt\xE9 \xE0 la somme de : "),n(66,"strong"),i(67),e()(),n(68,"div",42)(69,"div",43)(70,"div",44),i(71,"Le fournisseur"),e(),n(72,"div",71),i(73,"Nom : ________________________"),e(),u(74,"div",45),e(),n(75,"div",43)(76,"div",44),i(77,"Pour la soci\xE9t\xE9"),e(),n(78,"div",71),i(79,"Nom : ________________________"),e(),u(80,"div",45),e()(),n(81,"div",72),i(82),e()()),o&2){let t=r();a(4),l(t.companyName),a(),v(t.companyPhone?5:-1),a(5),l(t.purchaseOrder==null?null:t.purchaseOrder.name),a(6),l((t.purchaseOrder==null?null:t.purchaseOrder.partnerName)||"\u2014"),a(6),l(t.fmtDate(t.purchaseOrder==null?null:t.purchaseOrder.date)),a(),v(t.purchaseOrder!=null&&t.purchaseOrder.dateExpected?23:-1),a(),v(t.purchaseOrder!=null&&t.purchaseOrder.notes?24:-1),a(21),g((t.purchaseOrder==null?null:t.purchaseOrder.lines)??F(12,H)),a(8),c("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalHT)," F"),a(5),c("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalTVA)," F"),a(5),c("",t.fmt(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)," F"),a(4),l(t.montantEnLettres(t.purchaseOrder==null?null:t.purchaseOrder.totalTTC)),a(15),c("Bon de commande soumis \xE0 acceptation \xB7 ",t.companyName)}}function Bt(o,s){if(o&1&&(n(0,"div",19),i(1),e()),o&2){let t=r(2);a(),c("T\xE9l : ",t.companyPhone)}}function Ht(o,s){if(o&1&&(n(0,"div",27),i(1),e()),o&2){let t=r(2);a(),l(t.salesOrder==null?null:t.salesOrder.warehouseName)}}function Ut(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"\xC9ch\xE9ance"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.fmtDate(t.salesOrder==null?null:t.salesOrder.dateEcheance))}}function jt(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Facture"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.salesOrder==null?null:t.salesOrder.invoiceName)}}function qt(o,s){if(o&1&&(n(0,"div",29)(1,"span"),i(2,"Notes"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),l(t.salesOrder==null?null:t.salesOrder.notes)}}function Gt(o,s){if(o&1&&(n(0,"tr")(1,"td",73),i(2),e(),n(3,"td"),i(4),e(),n(5,"td",31),i(6),e(),n(7,"td",32),i(8),e(),n(9,"td",32),i(10),e(),n(11,"td",32),i(12),e(),n(13,"td",32),i(14),e(),n(15,"td",32),i(16),e(),n(17,"td",46),i(18),e()()),o&2){let t=s.$implicit,d=s.$index,m=r(2);a(2),l(d+1),a(2),l(t.productCode),a(2),l(t.description),a(2),l(m.fmt(t.quantity)),a(2),l(m.fmt(t.prixUnitaire)),a(2),l(t.tauxRemise?t.tauxRemise+"%":"\u2014"),a(2),l(t.tauxTVA?t.tauxTVA+"%":"\u2014"),a(2),l(m.fmt(t.montantHT)),a(2),l(m.fmt(t.montantTTC))}}function Qt(o,s){if(o&1&&(n(0,"div",37)(1,"span"),i(2,"Remise totale"),e(),n(3,"span"),i(4),e()()),o&2){let t=r(2);a(4),c("\u2013 ",t.fmt(t.salesOrder==null?null:t.salesOrder.totalRemise)," F")}}function Yt(o,s){if(o&1&&(n(0,"div",9)(1,"div",16)(2,"div",17)(3,"div",18),i(4),e(),p(5,Bt,2,1,"div",19),e(),n(6,"div",20)(7,"div",21),i(8,"BON DE COMMANDE"),e(),n(9,"div",22),i(10),e()()(),n(11,"div",23)(12,"div",24)(13,"div",25),i(14,"CLIENT"),e(),n(15,"div",26),i(16),e(),p(17,Ht,2,1,"div",27),e(),n(18,"div",28)(19,"div",29)(20,"span"),i(21,"Date"),e(),n(22,"span"),i(23),e()(),p(24,Ut,5,1,"div",29),p(25,jt,5,1,"div",29),p(26,qt,5,1,"div",29),e()(),n(27,"table",30)(28,"thead")(29,"tr")(30,"th",32),i(31,"#"),e(),n(32,"th"),i(33,"Code"),e(),n(34,"th",31),i(35,"D\xE9signation"),e(),n(36,"th",32),i(37,"Qt\xE9"),e(),n(38,"th",32),i(39,"P.U. HT"),e(),n(40,"th",32),i(41,"Remise"),e(),n(42,"th",32),i(43,"TVA"),e(),n(44,"th",32),i(45,"Mnt HT"),e(),n(46,"th",32),i(47,"Mnt TTC"),e()()(),n(48,"tbody"),f(49,Gt,19,9,"tr",null,C),e()(),n(51,"div",33)(52,"div",34),p(53,Qt,5,1,"div",37),n(54,"div",35)(55,"span"),i(56,"Total HT"),e(),n(57,"span"),i(58),e()(),n(59,"div",35)(60,"span"),i(61,"TVA (19,25%)"),e(),n(62,"span"),i(63),e()(),n(64,"div",38)(65,"span"),i(66,"TOTAL TTC"),e(),n(67,"span"),i(68),e()()()(),n(69,"div",41),i(70," Arr\xEAt\xE9 \xE0 la somme de : "),n(71,"strong"),i(72),e()(),n(73,"div",42)(74,"div",43)(75,"div",44),i(76,"Le client"),e(),n(77,"div",71),i(78,"Nom : ________________________"),e(),u(79,"div",45),e(),n(80,"div",43)(81,"div",44),i(82,"Pour la soci\xE9t\xE9"),e(),n(83,"div",71),i(84,"Nom : ________________________"),e(),u(85,"div",45),e()(),n(86,"div",72),i(87),e()()),o&2){let t=r();a(4),l(t.companyName),a(),v(t.companyPhone?5:-1),a(5),l(t.salesOrder==null?null:t.salesOrder.name),a(6),l((t.salesOrder==null?null:t.salesOrder.partnerName)||"\u2014"),a(),v(t.salesOrder!=null&&t.salesOrder.warehouseName?17:-1),a(6),l(t.fmtDate(t.salesOrder==null?null:t.salesOrder.date)),a(),v(t.salesOrder!=null&&t.salesOrder.dateEcheance?24:-1),a(),v(t.salesOrder!=null&&t.salesOrder.invoiceName?25:-1),a(),v(t.salesOrder!=null&&t.salesOrder.notes?26:-1),a(23),g((t.salesOrder==null?null:t.salesOrder.lines)??F(15,H)),a(4),v(t.salesOrder!=null&&t.salesOrder.totalRemise?53:-1),a(5),c("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalHT)," F"),a(5),c("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTVA)," F"),a(5),c("",t.fmt(t.salesOrder==null?null:t.salesOrder.totalTTC)," F"),a(4),l(t.montantEnLettres(t.salesOrder==null?null:t.salesOrder.totalTTC)),a(15),c("Bon de commande \xB7 ",t.companyName)}}var Kt=new Set(["CB12","CB24","CB12M","CB24M","CV12","CV24","CBG12","CBG15","CBG24","VIP12","VIP24","VCP12","VCP24","VIPG12","VIPG15","VIPG24","CVG12","CVG15","CVG24","EGUI12","EGUI15","EGUI24","PP","PB","TT","BPM","BGM","CAIMET","CONS001","INPN33","EMB1","EMB2","EMB3","EMB4","EMB5","CAISMB","PALT-V","PALTPL","PRC01","ELV01"]),ie=(()=>{class o{constructor(){this.invoice=null,this.picking=null,this.purchaseInvoice=null,this.purchaseOrder=null,this.salesOrder=null,this.docType="invoice",this.companyName="",this.companyPhone="",this.closed=new z,this.format="a4",this.printing=!1,this.FORMATS=[{value:"a4",label:"A4",icon:"description"},{value:"a5",label:"A5",icon:"article"},{value:"ticket",label:"Ticket",icon:"receipt"}]}get docTitle(){return this.docType==="bon"?"BON DE LIVRAISON":this.docType==="avoir"?"AVOIR":this.docType==="purchase_order"||this.docType==="sales_order"?"BON DE COMMANDE":this.docType==="purchase_invoice"?this.purchaseInvoice?.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR":"FACTURE"}get docRef(){return this.invoice?.name??this.picking?.name??this.purchaseInvoice?.name??this.purchaseOrder?.name??this.salesOrder?.name??""}get client(){return this.invoice?.partnerName??this.picking?.partnerName??this.purchaseInvoice?.partnerName??this.purchaseOrder?.partnerName??this.salesOrder?.partnerName??""}get allLines(){return this.invoice?.lines??[]}get salesLines(){return this.allLines.filter(t=>!this.isConsigne(t.productCode))}get consigneLines(){return this.allLines.filter(t=>this.isConsigne(t.productCode)&&(t.quantity??0)>=0)}get pickingMoves(){return this.picking?.moves??[]}get totalPickingQty(){return this.pickingMoves.reduce((t,d)=>t+(d.qtyDone??d.qtyDemanded??0),0)}get purchaseInvoiceLines(){return this.purchaseInvoice?.lines??[]}isConsigne(t){return!!t&&Kt.has(t.trim().toUpperCase())}fmt(t){return t==null?"0":new Intl.NumberFormat("fr-FR",{maximumFractionDigits:0}).format(t)}fmtDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})}catch(d){return t}}montantEnLettres(t){return q(Math.round(t??0))+" Francs CFA"}setFormat(t){this.format=t}close(){this.closed.emit()}print(){this.printing=!0;let t=this.buildFullHtml(),d=window.open("","_blank","width=1000,height=750");if(!d){this.printing=!1;return}d.document.write(t),d.document.close(),d.focus(),setTimeout(()=>{d.print(),d.onafterprint=()=>{d.close(),this.printing=!1}},600)}buildFullHtml(){let t,d;return this.docType==="bon"?(t=Wt,d=this.buildBonBody()):this.docType==="purchase_order"?(t=this.format==="a5"?M:O,d=this.buildPurchaseOrderBody()):this.docType==="sales_order"?(t=this.format==="a5"?M:O,d=this.buildSalesOrderBody()):this.docType==="purchase_invoice"?(t=this.format==="ticket"?B:this.format==="a5"?M:O,d=this.format==="ticket"?this.buildPurchaseInvoiceTicketBody():this.buildPurchaseInvoiceBody(this.format==="a5")):(t=this.format==="ticket"?B:this.format==="a5"?M:O,d=this.format==="ticket"?this.buildTicketBody():this.buildInvoiceBody(this.format==="a5")),`<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>${this.docTitle} ${this.docRef}</title>
<style>${t}</style></head><body>${d}</body></html>`}h(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}buildInvoiceBody(t=!1){let d=this.invoice,m=this.docType==="avoir"?"AVOIR":"FACTURE",E=this.salesLines.map(_=>`
      <tr>
        <td>${this.h(_.productCode)}</td>
        <td class="desc">${this.h(_.description)}</td>
        <td class="r">${this.fmt(_.quantity)}</td>
        <td class="r">${this.fmt(_.prixUnitaire)}</td>
        ${_.tauxRemise?`<td class="r">${_.tauxRemise}%</td>`:'<td class="r">\u2014</td>'}
        <td class="r">${this.fmt(_.montantHT)}</td>
        <td class="r">${_.tauxTVA?_.tauxTVA+"%":"\u2014"}</td>
        <td class="r bold">${this.fmt(_.montantTTC)}</td>
      </tr>`).join(""),h=this.consigneLines.length?`
      <tr class="consigne-header"><td colspan="8">CONSIGNES</td></tr>
      ${this.consigneLines.map(_=>`
        <tr class="consigne-row">
          <td>${this.h(_.productCode)}</td>
          <td class="desc">${this.h(_.description)}</td>
          <td class="r">${this.fmt(_.quantity)}</td>
          <td colspan="3"></td>
          <td></td>
          <td class="r">${this.fmt(_.montantTTC)}</td>
        </tr>`).join("")}`:"",x=d.ristourneDetails?.length?`
      <tr class="section-header"><td colspan="8">RISTOURNES D\xC9DUITES</td></tr>
      ${d.ristourneDetails.map(_=>`
        <tr class="ristourne-row">
          <td colspan="2">${this.h(_.categoryName)}</td>
          <td class="r">${this.fmt(_.quantite)}</td>
          <td class="r">${this.fmt(_.montantUnitaire)}</td>
          <td></td>
          <td class="r">${this.fmt(_.montantTotal)}</td>
          <td></td>
          <td class="r">- ${this.fmt(_.montantTotal)}</td>
        </tr>`).join("")}`:"",b=d.netAPayer??d.totalTTC??0;return`
<div class="doc">
  <div class="header">
    <div class="company">
      <div class="company-name">${this.h(this.companyName)}</div>
      ${this.companyPhone?`<div class="company-sub">T\xE9l : ${this.h(this.companyPhone)}</div>`:""}
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
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U.HT</th>
        <th class="r">Remise</th><th class="r">Mnt HT</th>
        <th class="r">TVA</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${E}
      ${h}
      ${x}
    </tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(d.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(d.totalTVA)} F</span></div>
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(d.totalTTC)} F</span></div>
      ${d.totalPrecompte?`<div class="tot-row deduct"><span>Pr\xE9compte (\u2212)</span><span>${this.fmt(d.totalPrecompte)} F</span></div>`:""}
      ${d.totalRistourne?`<div class="tot-row deduct"><span>Ristournes (\u2212)</span><span>${this.fmt(d.totalRistourne)} F</span></div>`:""}
      ${d.fraisEnlevementTTC?`<div class="tot-row"><span>Frais d'enl\xE8vement</span><span>${this.fmt(d.fraisEnlevementTTC)} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(b)} F</span></div>
      ${d.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(d.montantPaye)} F</span></div>`:""}
      ${d.montantDu?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(d.montantDu)} F</span></div>`:""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(b)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du livreur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature du client</div><div class="sig-area"></div></div>
  </div>
</div>`}buildTicketBody(){let t=this.invoice,d=this.docType==="avoir"?"AVOIR":"FACTURE",m=t.netAPayer??t.totalTTC??0,E=this.salesLines.map(x=>`
      <tr>
        <td class="tname">${this.h(x.description||x.productCode)}</td>
        <td class="r">${this.fmt(x.quantity)}\xD7${this.fmt(x.prixUnitaire)}</td>
        <td class="r">${this.fmt(x.montantTTC)}</td>
      </tr>`).join(""),h=this.consigneLines.length?`
      <tr class="sep"><td colspan="3">\u2014 Consignes \u2014</td></tr>
      ${this.consigneLines.map(x=>`
        <tr><td class="tname">${this.h(x.description)}</td>
            <td class="r">${this.fmt(x.quantity)}</td>
            <td class="r">${this.fmt(x.montantTTC)}</td>
        </tr>`).join("")}`:"";return`
<div class="ticket">
  <div class="t-company">${this.h(this.companyName)}</div>
  ${this.companyPhone?`<div class="t-phone">${this.h(this.companyPhone)}</div>`:""}
  <div class="t-sep"></div>
  <div class="t-doctype">${d}</div>
  <div class="t-ref">${this.h(t.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(t.date)}</span></div>
  <div class="t-line"><span>Client</span><span>${this.h(t.partnerName)}</span></div>
  <div class="t-sep"></div>
  <table class="t-lines">
    <tbody>${E}${h}</tbody>
  </table>
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(t.totalHT)} F</span></div>
  <div class="t-line"><span>TVA 19,25%</span><span>${this.fmt(t.totalTVA)} F</span></div>
  ${t.totalPrecompte?`<div class="t-line"><span>Pr\xE9compte</span><span>- ${this.fmt(t.totalPrecompte)} F</span></div>`:""}
  ${t.fraisEnlevementTTC?`<div class="t-line"><span>Frais enl\xE8v.</span><span>${this.fmt(t.fraisEnlevementTTC)} F</span></div>`:""}
  <div class="t-sep"></div>
  <div class="t-total"><span>NET \xC0 PAYER</span><span>${this.fmt(m)} F</span></div>
  ${t.montantDu?`<div class="t-line small"><span>Reste d\xFB</span><span>${this.fmt(t.montantDu)} F</span></div>`:""}
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(m)}</div>
  <div class="t-thanks">Merci de votre confiance !</div>
  <div class="t-sig">Signature : __________________</div>
</div>`}buildPurchaseInvoiceBody(t=!1){let d=this.purchaseInvoice,m=d.type==="credit_note"?"AVOIR FOURNISSEUR":"FACTURE FOURNISSEUR",E=this.purchaseInvoiceLines.map(x=>`
      <tr>
        <td>${this.h(x.productCode)}</td>
        <td class="desc">${this.h(x.description)}</td>
        <td class="r">${this.fmt(x.quantity)}</td>
        <td class="r">${this.fmt(x.prixUnitaire)}</td>
        <td class="r">${x.tauxTVA?x.tauxTVA+"%":"\u2014"}</td>
        <td class="r">${this.fmt(x.montantHT)}</td>
        <td class="r bold">${this.fmt(x.montantTTC)}</td>
      </tr>`).join(""),h=d.netAPayer??d.totalTTC??0;return`
<div class="doc">
  <div class="header">
    <div class="company">
      <div class="company-name">${this.h(this.companyName)}</div>
      ${this.companyPhone?`<div class="company-sub">T\xE9l : ${this.h(this.companyPhone)}</div>`:""}
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
    </div>
  </div>
  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U.HT</th>
        <th class="r">TVA</th><th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>${E}</tbody>
  </table>
  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(d.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA</span><span>${this.fmt(d.totalTVA)} F</span></div>
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(d.totalTTC)} F</span></div>
      ${d.totalPrecompte?`<div class="tot-row"><span>PSA</span><span>${this.fmt(d.totalPrecompte)} F</span></div>`:""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(h)} F</span></div>
      ${d.montantPaye?`<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(d.montantPaye)} F</span></div>`:""}
      ${d.montantDu?`<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(d.montantDu)} F</span></div>`:""}
    </div>
  </div>
  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(h)}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du fournisseur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature</div><div class="sig-area"></div></div>
  </div>
</div>`}buildPurchaseInvoiceTicketBody(){let t=this.purchaseInvoice,d=t.type==="credit_note"?"AVOIR FOURN.":"FACT. FOURN.",m=t.netAPayer??t.totalTTC??0,E=this.purchaseInvoiceLines.map(h=>`
      <tr>
        <td class="tname">${this.h(h.description||h.productCode)}</td>
        <td class="r">${this.fmt(h.quantity)}\xD7${this.fmt(h.prixUnitaire)}</td>
        <td class="r">${this.fmt(h.montantTTC)}</td>
      </tr>`).join("");return`
<div class="ticket">
  <div class="t-company">${this.h(this.companyName)}</div>
  ${this.companyPhone?`<div class="t-phone">${this.h(this.companyPhone)}</div>`:""}
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
      <div class="company-name">${this.h(this.companyName)}</div>
      ${this.companyPhone?`<div class="company-sub">T\xE9l : ${this.h(this.companyPhone)}</div>`:""}
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
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(t.totalTVA)} F</span></div>
      <div class="tot-row net"><span>TOTAL TTC</span><span>${this.fmt(t.totalTTC)} F</span></div>
    </div>
  </div>
  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(t.totalTTC)}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le fournisseur</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la soci\xE9t\xE9</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Bon de commande soumis \xE0 acceptation du fournisseur \xB7 ${this.h(this.companyName)}</div>
</div>`}buildSalesOrderBody(){let t=this.salesOrder,d=(t.lines||[]).map((m,E)=>`
      <tr>
        <td class="r idx">${E+1}</td>
        <td>${this.h(m.productCode)}</td>
        <td class="desc">${this.h(m.description)}</td>
        <td class="r">${this.fmt(m.quantity)}</td>
        <td class="r">${this.fmt(m.prixUnitaire)}</td>
        ${m.tauxRemise?`<td class="r">${m.tauxRemise}%</td>`:'<td class="r">\u2014</td>'}
        <td class="r">${m.tauxTVA?m.tauxTVA+"%":"\u2014"}</td>
        <td class="r">${this.fmt(m.montantHT)}</td>
        <td class="r bold">${this.fmt(m.montantTTC)}</td>
      </tr>`).join("");return`
<div class="doc">
  <div class="header">
    <div class="company">
      <div class="company-name">${this.h(this.companyName)}</div>
      ${this.companyPhone?`<div class="company-sub">T\xE9l : ${this.h(this.companyPhone)}</div>`:""}
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
      <div class="tot-row net"><span>TOTAL TTC</span><span>${this.fmt(t.totalTTC)} F</span></div>
    </div>
  </div>
  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(t.totalTTC)}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le client</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la soci\xE9t\xE9</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Bon de commande \xB7 ${this.h(this.companyName)}</div>
</div>`}buildBonBody(){let t=this.picking,d=this.pickingMoves.map((E,h)=>`
      <tr>
        <td class="r idx">${h+1}</td>
        <td>${this.h(E.productCode)}</td>
        <td class="desc">${this.h(E.productName)}</td>
        <td class="r">${this.fmt(E.qtyDemanded)}</td>
        <td class="r bold">${this.fmt(E.qtyDone??E.qtyDemanded)}</td>
        <td>${this.h(E.uomName)}</td>
      </tr>`).join(""),m=this.pickingMoves.reduce((E,h)=>E+(h.qtyDone??h.qtyDemanded??0),0);return`
<div class="doc">
  <div class="header">
    <div class="company">
      <div class="company-name">${this.h(this.companyName)}</div>
      ${this.companyPhone?`<div class="company-sub">T\xE9l : ${this.h(this.companyPhone)}</div>`:""}
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
</div>`}static{this.\u0275fac=function(d){return new(d||o)}}static{this.\u0275cmp=R({type:o,selectors:[["app-print-preview"]],inputs:{invoice:"invoice",picking:"picking",purchaseInvoice:"purchaseInvoice",purchaseOrder:"purchaseOrder",salesOrder:"salesOrder",docType:"docType",companyName:"companyName",companyPhone:"companyPhone"},outputs:{closed:"closed"},decls:33,vars:22,consts:[["(click).self","close()",1,"pp-overlay"],[1,"pp-modal"],[1,"pp-header"],[1,"pp-header-left"],[1,"material-icons"],[1,"pp-close",3,"click"],[1,"pp-formats"],[1,"pp-body"],[1,"preview-page"],[1,"inv-doc"],[1,"tkt"],[1,"pp-footer"],[1,"pp-btn-cancel",3,"click"],[1,"pp-btn-print",3,"click","disabled"],[1,"fmt-btn",3,"active"],[1,"fmt-btn",3,"click"],[1,"inv-header"],[1,"inv-company"],[1,"inv-co-name"],[1,"inv-co-sub"],[1,"inv-title-block"],[1,"inv-doctype"],[1,"inv-ref"],[1,"inv-meta"],[1,"inv-meta-client"],[1,"inv-meta-lbl"],[1,"inv-meta-val"],[1,"inv-meta-sub"],[1,"inv-meta-dates"],[1,"inv-mrow"],[1,"inv-lines"],[1,"tdesc"],[1,"tr"],[1,"inv-totals-wrap"],[1,"inv-totals"],[1,"inv-trow"],[1,"inv-trow","inv-grand"],[1,"inv-trow","inv-deduct"],[1,"inv-trow","inv-net"],[1,"inv-trow","inv-paid"],[1,"inv-trow","inv-due"],[1,"inv-lettres"],[1,"inv-sigs"],[1,"inv-sig"],[1,"inv-sig-lbl"],[1,"inv-sig-area"],[1,"tr","tbold"],[1,"inv-section-hdr"],["colspan","8"],[1,"inv-consigne"],["colspan","3"],[1,"inv-rst"],["colspan","2"],[1,"tr","inv-red"],[1,"tkt-co"],[1,"tkt-phone"],[1,"tkt-sep"],[1,"tkt-type"],[1,"tkt-ref"],[1,"tkt-row"],[1,"tkt-row","sm"],[1,"tkt-total"],[1,"tkt-lettres"],[1,"tkt-thanks"],[1,"tkt-sig"],[1,"tkt-prod-name"],[1,"tkt-prod-row"],[1,"tbold"],[1,"tkt-sep-label"],["colspan","4",1,"tr","inv-total-lbl"],[1,"tr","inv-total-val"],[1,"inv-sig-name"],[1,"inv-footer-note"],[1,"tr","tgray"]],template:function(d,m){d&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),i(5,"print"),e(),n(6,"span"),i(7,"Aper\xE7u avant impression \u2014 "),n(8,"strong"),i(9),e()()(),n(10,"button",5),I("click",function(){return m.close()}),n(11,"span",4),i(12,"close"),e()()(),p(13,Q,3,0,"div",6),p(14,W,3,0,"div",6),n(15,"div",7)(16,"div",8),p(17,ct,90,21,"div",9),p(18,ft,51,14,"div",10),p(19,St,65,9,"div",9),p(20,kt,83,16,"div",9),p(21,Ft,43,10,"div",10),p(22,Lt,83,13,"div",9),p(23,Yt,88,16,"div",9),e()(),n(24,"div",11)(25,"button",12),I("click",function(){return m.close()}),n(26,"span",4),i(27,"close"),e(),i(28," Fermer "),e(),n(29,"button",13),I("click",function(){return m.print()}),n(30,"span",4),i(31),e(),i(32),e()()()()),d&2&&(a(9),$("",m.docTitle," ",m.docRef),a(4),v(m.docType!=="bon"&&m.docType!=="purchase_order"&&m.docType!=="sales_order"?13:-1),a(),v(m.docType==="purchase_order"||m.docType==="sales_order"?14:-1),a(),w("ticket-mode",m.format==="ticket"),a(),w("page-a4",m.format==="a4")("page-a5",m.format==="a5")("page-ticket",m.format==="ticket"||m.docType==="bon"&&m.format==="a4"),a(),v((m.docType==="invoice"||m.docType==="avoir")&&m.format!=="ticket"?17:-1),a(),v((m.docType==="invoice"||m.docType==="avoir")&&m.format==="ticket"?18:-1),a(),v(m.docType==="bon"?19:-1),a(),v(m.docType==="purchase_invoice"&&m.format!=="ticket"?20:-1),a(),v(m.docType==="purchase_invoice"&&m.format==="ticket"?21:-1),a(),v(m.docType==="purchase_order"?22:-1),a(),v(m.docType==="sales_order"?23:-1),a(6),V("disabled",m.printing),a(2),l(m.printing?"hourglass_empty":"print"),a(),c(" ",m.printing?"G\xE9n\xE9ration...":"Imprimer"," "))},dependencies:[L],styles:[".pp-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000a6;display:flex;align-items:flex-start;justify-content:center;z-index:9999;padding:20px;overflow-y:auto}.pp-modal[_ngcontent-%COMP%]{background:#fff;border-radius:10px;width:100%;max-width:860px;display:flex;flex-direction:column;max-height:calc(100vh - 40px);box-shadow:0 20px 60px #0006}.pp-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid #e9ecef;background:#f8f9fa;border-radius:10px 10px 0 0}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:14px;color:#212529}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#017e84;font-size:20px}.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#017e84}.pp-close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;color:#6c757d;display:flex;align-items:center;border-radius:50%;padding:4px;transition:all .15s}.pp-close[_ngcontent-%COMP%]:hover{background:#e9ecef;color:#212529}.pp-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px}.pp-formats[_ngcontent-%COMP%]{display:flex;gap:8px;padding:12px 20px;border-bottom:1px solid #f0f0f0;background:#fff}.fmt-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border:1px solid #dee2e6;border-radius:20px;background:#fff;color:#495057;font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.fmt-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:15px}.fmt-btn[_ngcontent-%COMP%]:hover{background:#f0fafa;border-color:#017e84}.fmt-btn.active[_ngcontent-%COMP%]{background:#017e84;color:#fff;border-color:#017e84}.pp-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;background:#e0e2e5;padding:32px 24px;display:flex;justify-content:center;align-items:flex-start;min-height:420px}.pp-body.ticket-mode[_ngcontent-%COMP%]{align-items:flex-start;padding-top:24px}.preview-page[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 24px #00000038;transform-origin:top center}.preview-page.page-a4[_ngcontent-%COMP%]{width:210mm;min-height:297mm;transform:scale(.6);margin-top:-59mm;margin-bottom:-118.8mm}.preview-page.page-a5[_ngcontent-%COMP%]{width:148mm;min-height:210mm;transform:scale(.72);margin-top:-29mm;margin-bottom:-58.8mm}.preview-page.page-ticket[_ngcontent-%COMP%]{width:80mm;min-height:120mm;transform:scale(.9);margin-bottom:-12mm}.inv-doc[_ngcontent-%COMP%]{padding:14mm;font-family:Arial,sans-serif;font-size:9pt;color:#111}.inv-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #222;padding-bottom:4mm;margin-bottom:8mm}.inv-co-name[_ngcontent-%COMP%]{font-size:15pt;font-weight:700;color:#017e84}.inv-co-sub[_ngcontent-%COMP%]{font-size:9pt;color:#555;margin-top:2px}.inv-title-block[_ngcontent-%COMP%]{text-align:right}.inv-doctype[_ngcontent-%COMP%]{font-size:18pt;font-weight:800;letter-spacing:1px}.inv-ref[_ngcontent-%COMP%]{font-size:11pt;font-weight:600;color:#017e84;margin-top:2px}.inv-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:8mm}.inv-meta-lbl[_ngcontent-%COMP%]{font-size:7pt;font-weight:700;text-transform:uppercase;color:#888;margin-bottom:2px}.inv-meta-val[_ngcontent-%COMP%]{font-size:12pt;font-weight:700}.inv-meta-sub[_ngcontent-%COMP%]{font-size:8pt;color:#555}.inv-meta-dates[_ngcontent-%COMP%]{text-align:right}.inv-mrow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;font-size:9pt;margin-bottom:2px}.inv-mrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:#888;font-size:8pt}table.inv-lines[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:6mm;font-size:8.5pt}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#017e84;color:#fff}table.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px 6px;text-align:left;font-weight:600;font-size:7.5pt}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:#f7fafa}table.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px 6px;border-bottom:1px solid #e8e8e8}table.inv-lines[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:2px solid #017E84;padding:4px 6px;background:#f0f8f8}.tdesc[_ngcontent-%COMP%]{max-width:110px;word-break:break-word}.tr[_ngcontent-%COMP%]{text-align:right}.tbold[_ngcontent-%COMP%]{font-weight:700}.tgray[_ngcontent-%COMP%]{color:#aaa;font-size:7.5pt}.inv-section-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#e8f5f5;font-size:7pt;font-weight:700;color:#017e84;text-transform:uppercase;padding:3px 6px}.inv-consigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .inv-rst[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#fafafa;color:#555;font-size:8pt}.inv-red[_ngcontent-%COMP%]{color:#c00}.inv-totals-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:5mm}.inv-totals[_ngcontent-%COMP%]{width:72mm}.inv-trow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:2px 6px;font-size:9pt;border-bottom:1px solid #eee}.inv-grand[_ngcontent-%COMP%]{font-weight:700;background:#f0f8f8}.inv-net[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;background:#017e84;color:#fff;padding:4px 6px}.inv-deduct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:#c00}.inv-paid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:#2a7}.inv-due[_ngcontent-%COMP%]{font-weight:700;color:#c00}.inv-total-lbl[_ngcontent-%COMP%]{font-size:8.5pt;font-weight:700}.inv-total-val[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;color:#017e84}.inv-lettres[_ngcontent-%COMP%]{font-size:8.5pt;font-style:italic;border-top:1px solid #ccc;padding-top:3mm;margin-bottom:8mm}.inv-sigs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10mm;margin-top:8mm}.inv-sig[_ngcontent-%COMP%]{flex:1}.inv-sig-lbl[_ngcontent-%COMP%]{font-size:8pt;font-weight:700;margin-bottom:2mm}.inv-sig-name[_ngcontent-%COMP%]{font-size:8pt;color:#555;margin-bottom:2mm}.inv-sig-area[_ngcontent-%COMP%]{height:20mm;border:1px solid #aaa;border-radius:2px}.inv-footer-note[_ngcontent-%COMP%]{font-size:7pt;color:#aaa;text-align:center;margin-top:6mm;border-top:1px solid #eee;padding-top:2mm}.tkt[_ngcontent-%COMP%]{width:80mm;padding:3mm 4mm;font-family:Courier New,monospace;font-size:8pt}.tkt-co[_ngcontent-%COMP%]{font-size:11pt;font-weight:800;text-align:center;margin-bottom:1mm}.tkt-phone[_ngcontent-%COMP%]{font-size:7.5pt;text-align:center;color:#555;margin-bottom:2mm}.tkt-sep[_ngcontent-%COMP%]{border-top:1px dashed #666;margin:2mm 0}.tkt-type[_ngcontent-%COMP%]{font-size:12pt;font-weight:800;text-align:center;letter-spacing:2px;margin:1mm 0}.tkt-ref[_ngcontent-%COMP%]{font-size:9pt;font-weight:700;text-align:center;color:#333;margin-bottom:2mm}.tkt-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:8pt;margin:1px 0}.tkt-row.sm[_ngcontent-%COMP%]{font-size:7.5pt;color:#555}.tkt-prod-name[_ngcontent-%COMP%]{font-size:7.5pt;margin-top:1mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tkt-prod-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:7.5pt;margin-bottom:1mm;padding-left:2mm}.tkt-sep-label[_ngcontent-%COMP%]{text-align:center;font-size:7pt;color:#888;padding:1mm 0}.tkt-total[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:11pt;font-weight:800;border-top:2px solid #111;border-bottom:2px solid #111;padding:1mm 0;margin:2mm 0}.tkt-lettres[_ngcontent-%COMP%]{font-size:6.5pt;font-style:italic;text-align:center;margin:2mm 0;color:#555}.tkt-thanks[_ngcontent-%COMP%]{font-size:8.5pt;text-align:center;font-weight:700;margin:2mm 0}.tkt-sig[_ngcontent-%COMP%]{font-size:8pt;text-align:center;margin-top:4mm}.pp-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:14px 20px;border-top:1px solid #e9ecef;background:#f8f9fa;border-radius:0 0 10px 10px}.pp-btn-cancel[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border:1px solid #dee2e6;border-radius:6px;background:#fff;color:#495057;font-size:13px;font-weight:500;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-cancel[_ngcontent-%COMP%]:hover{background:#f0f0f0}.pp-btn-print[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 20px;background:#017e84;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;font-family:Roboto,sans-serif;transition:all .15s}.pp-btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px}.pp-btn-print[_ngcontent-%COMP%]:hover:not(:disabled){background:#015f64}.pp-btn-print[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}"]})}}return o})(),j=`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: Arial, sans-serif; }
.doc { padding: 14mm 14mm 10mm; max-width: 190mm; margin: 0 auto; }
.header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10mm; border-bottom: 2px solid #222; padding-bottom: 4mm; }
.company-name { font-size: 15pt; font-weight: 700; color: #017E84; }
.company-sub { font-size: 9pt; color: #555; margin-top: 2px; }
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
.desc { max-width: 120px; }
.consigne-header td, .section-header td { background: #e8f5f5; font-size: 7pt; font-weight: 700; color: #017E84; padding: 3px 6px; text-transform: uppercase; }
.consigne-row td, .ristourne-row td { background: #fafafa; color: #555; font-size: 8pt; }
.totals-wrap { display: flex; justify-content: flex-end; margin-bottom: 5mm; }
.totals { width: 72mm; }
.tot-row { display: flex; justify-content: space-between; padding: 2px 6px; font-size: 9pt; border-bottom: 1px solid #eee; }
.tot-row.grand { font-weight: 700; background: #f0f8f8; }
.tot-row.net { font-size: 11pt; font-weight: 800; background: #017E84; color: white; padding: 4px 6px; border-radius: 2px; }
.tot-row.deduct span:last-child { color: #c00; }
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
`,O=j+`
body { font-size: 9pt; }
@page { size: A4 portrait; }
`,M=j+`
body { font-size: 8pt; }
.doc { padding: 10mm 10mm 8mm; max-width: 138mm; }
.doc-type { font-size: 14pt; }
.doc-ref { font-size: 9.5pt; }
.company-name { font-size: 13pt; }
table.lines { font-size: 7.5pt; }
.tot-row.net { font-size: 9.5pt; }
.lettres { font-size: 7.5pt; }
.sig-area { height: 15mm; }
@page { size: A5 portrait; }
`,B=`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: 'Courier New', monospace; font-size: 8pt; width: 80mm; }
.ticket { width: 80mm; padding: 3mm 4mm; }
.t-company { font-size: 11pt; font-weight: 800; text-align: center; margin-bottom: 1mm; }
.t-phone { font-size: 7.5pt; text-align: center; color: #555; margin-bottom: 2mm; }
.t-sep { border-top: 1px dashed #666; margin: 2mm 0; }
.t-doctype { font-size: 12pt; font-weight: 800; text-align: center; letter-spacing: 2px; margin: 1mm 0; }
.t-ref { font-size: 9pt; font-weight: 700; text-align: center; color: #333; margin-bottom: 2mm; }
.t-line { display: flex; justify-content: space-between; font-size: 8pt; margin: 1px 0; }
.t-line.small { font-size: 7pt; color: #555; }
table.t-lines { width: 100%; border-collapse: collapse; margin: 1mm 0; }
table.t-lines td { padding: 1px 2px; font-size: 7.5pt; vertical-align: top; }
.tname { max-width: 40mm; }
.sep td { text-align: center; color: #888; font-size: 7pt; padding: 2px 0; }
.r { text-align: right; }
.t-total { display: flex; justify-content: space-between; font-size: 11pt; font-weight: 800; margin: 2mm 0; border-top: 2px solid #111; border-bottom: 2px solid #111; padding: 1mm 0; }
.t-lettres { font-size: 6.5pt; font-style: italic; text-align: center; margin: 2mm 0; color: #444; }
.t-thanks { font-size: 8pt; text-align: center; font-weight: 700; margin: 2mm 0; }
.t-sig { font-size: 8pt; margin-top: 4mm; text-align: center; }
@page { size: 80mm auto; margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`,Wt=O;function q(o){if(o===0)return"Z\xE9ro";if(o<0)return"Moins "+q(-o);let s=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"],t=["","","vingt","trente","quarante","cinquante","soixante","soixante","quatre-vingt","quatre-vingt"];function d(P){if(P<20)return s[P];let S=Math.floor(P/10),T=P%10;if(S===7)return"soixante-"+(T===1?"et-onze":s[10+T]);if(S===9)return"quatre-vingt-"+(T===0?"":s[T]).replace(/^-/,"");let y=t[S];return T===0?y+(S===8?"s":""):T===1&&S!==8?y+"-et-un":y+"-"+s[T]}function m(P){if(P<100)return d(P);let S=Math.floor(P/100),T=P%100,y=S===1?"cent":d(S)+" cent";return T===0?y+(S>1?"s":""):y+" "+d(T)}let E=[],h=Math.floor(o/1e9);o%=1e9;let x=Math.floor(o/1e6);o%=1e6;let b=Math.floor(o/1e3);o%=1e3;let _=o;h&&E.push(m(h)+(h===1?" milliard":" milliards")),x&&E.push(m(x)+(x===1?" million":" millions")),b&&E.push(b===1?"mille":m(b)+" mille"),_&&E.push(m(_));let D=E.join(" ").trim().replace(/\s+/g," ");return D.charAt(0).toUpperCase()+D.slice(1)}export{ie as a};
