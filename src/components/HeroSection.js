import React from "react";
import { Container } from "react-bootstrap";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/HeroSection.css";

function HeroSection() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("https://monosandboxst.wpengine.com/wp-json/wp/v2/pages/27")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setItems(result);
  //       },
  //     )
  // }, []);

  return (
    <Container>
      <div className="Hero-Background">
        <header>
          <div>
            <FontAwesomeIcon icon={faUserCircle} className="Icon-1" />
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingBag} className="Icon-2" />
          </div>
          <div className="bar-container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <p className="Shop">SHOP</p>
          <p className="Appt">Request An Appointment</p>
        </header>
        <svg
          className="Hero-Logo"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 168 98"
        >
          <g fill="#fff" clipPath="url(#clip0)">
            <path d="M70.0498 22.287V9.84019c0-3.36695.3257-4.99069 2.1821-6.74477 1.8565-1.75407 6.009-2.193946 6.009-2.193946V0H53.1467v.896043s4.5542.407297 6.4866 2.335147c1.927 1.92785 1.7913 6.56555 1.7913 6.56555V40.7781c-.0055.1684-.0109.3367-.0109.5051 0 3.8774 3.1592 6.5818 9.103 8.1024v-5.1591c-.2172-.9449-.3312-1.9278-.3312-2.9379 0-6.6959 4.9722-12.2242 11.4208-13.0985v-9.9434c-4.2882.3313-8.2399 1.8355-11.551 4.187v-.1467h-.0055zM88.9397 0v.896043s4.1525.445307 6.0089 2.193947c1.8564 1.75407 2.1821 3.37781 2.1821 6.74477V22.4282c-3.3112-2.3514-7.2683-3.8557-11.551-4.1869v9.9379c6.4486.8798 11.4207 6.4081 11.4207 13.0985 0 1.0101-.1194 1.993-.3311 2.938v5.159c5.9437-1.5206 9.1027-4.2195 9.1027-8.1024 0-.1683-.011-.3367-.011-.505V9.79674s-.141-4.6377 1.792-6.56555c1.927-1.92785 6.486-2.335147 6.486-2.335147V0H88.9397zM17.9888 97.9458v-.3584c.8902-.0706 1.6338-.2335 2.2363-.4887.6026-.2498.9988-.5322 1.1888-.8472.0488-.0706.0923-.2172.1248-.4344.038-.2173.0652-.4671.0923-.7549.0217-.2878.0434-.5865.0543-.9015.0109-.3095.0163-.6136.0163-.9014.0217-.7929.038-1.6129.038-2.4547V88.388v-2.0201-1.097H7.49622v7.5919c0 .6951.01086 1.3685.038 2.0202.02171.6517.13027 1.1078.32568 1.3685.28769.4073.6948.7223 1.22676.9395.52652.2172 1.04764.3475 1.55244.3964v.3584H0v-.3584c.60252-.0977 1.1779-.2552 1.73157-.4887.55366-.2281.97163-.5105 1.25932-.8472.0977-.1195.1737-.3204.23341-.5974.05971-.2769.10856-.5973.14656-.9557.03799-.3585.06513-.7495.09227-1.173.02172-.4182.038-.8255.038-1.2111 0-.3367.00543-.7928.01629-1.3685.01085-.5756.02171-1.211.03799-1.8952.01629-.6843.01629-1.3903.01629-2.1071v-9.1233-1.2979c0-.4345-.01629-.8364-.05428-1.2111-.038-.3747-.09228-.7114-.16285-1.01-.07056-.2987-.17913-.5322-.32568-.706-.33655-.4073-.74908-.7006-1.24304-.8852-.49396-.1792-1.053055-.3041-1.677288-.3801v-.3585H10.8508v.3585c-.3366.0488-.6948.1194-1.0802.2172-.3854.0977-.7328.2444-1.04763.4507-.31483.2064-.57538.4888-.7925.8472-.21713.3584-.33654.82-.35826 1.3685-.02171.8417-.04342 1.7486-.05428 2.7207-.01085.9721-.01628 1.9061-.01628 2.7967V84.087H21.7396v-1.8029-1.8736-1.8409c0-.6245-.0109-1.3359-.038-2.1288-.0217-.4562-.0543-.9286-.0923-1.4228-.038-.4942-.152-.8961-.342-1.211-.4342-.6463-.9282-1.0536-1.4764-1.2056-.5537-.1575-1.1073-.2444-1.6556-.2715v-.3585h10.8508v.3585c-.5754.0706-1.1399.2335-1.6936.4887-.5536.2498-.9607.6191-1.2267 1.1024-.0977.1684-.1683.4019-.2171.7006-.0489.2986-.0869.6353-.1086 1.01-.0217.3748-.038.7495-.038 1.135v11.7952c0 .6734.0054 1.3685.0163 2.0908.0108.7222.0163 1.5151.0163 2.3786 0 .6951.0163 1.3413.0542 1.9278.038.5865.1249.9938.2715 1.211.3094.4779.7328.8201 1.2593 1.0101.5265.1901 1.1073.3259 1.7315.3965v.3584H17.9888v.0108zM32.5142 97.9458v-.3584c.6025-.0977 1.1616-.2498 1.6773-.467.5157-.2172.9553-.5268 1.3136-.9395.1194-.1466.2117-.3476.2714-.6137.0597-.266.1086-.5756.1466-.9394.038-.3585.0597-.7386.0705-1.135.0109-.3965.0163-.7875.0163-1.173 0-.3367.0054-.7929.0163-1.3685.0108-.5757.0217-1.211.038-1.8953.0108-.6842.0163-1.3902.0163-2.1071v-9.1287-1.2979c0-.4345-.0163-.8364-.0543-1.2111-.038-.3747-.0923-.7114-.1629-1.01-.0705-.2987-.1791-.5322-.3256-.706-.3366-.4073-.7491-.7006-1.2431-.8852-.4939-.1792-1.053-.3041-1.6773-.3801v-.3585h10.7803v.3585c-.5049.0706-1.0477.2063-1.623.3964-.5754.1901-1.0205.5756-1.3354 1.1567-.2171.4073-.3311.9232-.3419 1.5477-.0109.6245-.0326 1.2165-.0543 1.7649 0 .6028-.0054 1.1948-.0163 1.7867-.0109.5919-.0163 1.1839-.0163 1.7867V92.8465c0 .6952.0109 1.3685.038 2.0202.0217.6517.1303 1.1078.3257 1.3685.2877.4073.7437.7223 1.3679.9395.6242.2172 1.1887.3476 1.6936.3964v.3584H32.5142v.0163zM73.4697 89.3602c-.4343 1.3685-1.0205 2.5469-1.7642 3.5353-.7436.9883-1.6121 1.8029-2.5946 2.4546-.9879.6516-2.0301 1.1676-3.1375 1.5531-1.1073.3856-2.2472.6571-3.4251.8092-1.1779.1575-2.3178.2335-3.4251.2335H46.7145v-.3584c.6025-.0706 1.1833-.2281 1.7479-.4671.5645-.2389.9933-.5267 1.281-.8634.1194-.1195.2117-.3259.2714-.6137.0597-.2878.114-.6136.1628-.972.0489-.3585.0869-.744.1086-1.1568.0217-.4072.038-.8037.038-1.1892 0-.3367.0054-.7929.0163-1.3685.0108-.5757.0217-1.2111.038-1.8953.0108-.6843.0163-1.3902.0163-2.1071v-9.1342-1.2979c0-.4344-.0163-.8363-.0543-1.211-.038-.3747-.0923-.7114-.1629-1.0101-.0705-.2987-.1791-.5322-.3256-.706-.3583-.4344-.7926-.7331-1.2974-.9014-.5048-.1684-1.0693-.2879-1.6935-.3585v-.3584c1.0096 0 2.4643-.0054 4.3587-.0163 1.8999-.0108 4.196-.0163 6.8829-.0163h1.5578c.7926 0 1.5851.038 2.3776.1086.7925.0706 1.585.1955 2.3775.3585.7925.1683 1.5741.4236 2.3449.7602 1.0096.4345 1.9596.9884 2.8498 1.6564.8902.6734 1.6664 1.4717 2.3232 2.4003.6622.9286 1.1888 1.993 1.585 3.2094.3963 1.2165.5971 2.6013.5971 4.1653 0 1.8029-.2171 3.3887-.6459 4.7572zm-4.4348-8.765c-.4343-1.3196-1.0313-2.5198-1.8021-3.5896-.7708-1.0698-1.6828-1.9767-2.7412-2.7207-1.0585-.744-2.2093-1.2273-3.4632-1.4445-.4831-.0978-1.0096-.1738-1.585-.2335-.5754-.0598-.5319-.0924-1.3733-.0924-.2877 0-.6025.0055-.9391.0163-.3365.0109-.6676.0381-.9933.0706-.3257.0381-.6242.0652-.9011.0924-.2768.0217-.4993.0597-.6676.1086-.1194 1.1784-.1954 2.8021-.2171 4.8712-.0218 2.069-.038 4.5345-.038 7.391v4.2195c0 1.2491.0108 2.27.038 3.0629 0 .3367.0162.706.0542 1.1024.038.3964.076.782.1249 1.1513.0488.3747.1248.7114.2334 1.01.1086.2987.2334.5214.38.668.4776.4833 1.0856.7874 1.8184.9178.7328.1303 1.4221.2009 2.0735.2009.6025 0 .4668-.0326 1.1074-.0923.635-.0598 1.2321-.1738 1.7858-.3421 2.5946-.744 4.5379-2.194 5.8189-4.3445 1.2865-2.1505 1.927-4.8006 1.927-7.9503.0054-1.3903-.2063-2.7479-.6405-4.073zM96.4845 97.9458H74.4247v-.3584c.6025-.0978 1.1616-.2498 1.6772-.4671.5157-.2172.9445-.5159 1.2811-.9014.1194-.1467.2171-.353.2877-.63.0705-.2769.1357-.5973.1954-.9558.0597-.3584.1031-.7385.1248-1.135.0217-.3964.038-.7874.038-1.173 0-.3367.0054-.7928.0163-1.3685.0109-.5756.0217-1.211.038-1.8952.0109-.6843.0163-1.3903.0163-2.1071v-9.1342c0-.4344-.0054-.8798-.0163-1.3359-.0109-.4562-.038-.8906-.0706-1.2979-.038-.4073-.0977-.7766-.1791-1.1024-.0868-.3259-.1954-.5594-.342-.706-.3582-.3856-.7436-.63-1.1507-.7386-.4071-.1086-.9391-.2118-1.585-.3041v-.3584h19.8994l2.4535 5.9519-.3582.1792c-1.9487-2.4274-3.7726-4.062-5.477-4.9038-.4071-.19-1.167-.3584-2.2689-.505-1.1074-.1467-2.4536-.2172-4.0386-.2172-.5048 0-1.0259.0162-1.5687.0543-.5428.038-.9336.076-1.1725.1249-.0488.3855-.0922 1.1784-.1248 2.3785-.038 1.2002-.0543 2.5959-.0543 4.1816v2.308c0 .6245.0054 1.135.0163 1.5314.0109.3964.0163 1.1676.0163 1.2436.1194 0 .342.0109.7002.0109.3583 0 .7654.0108 1.2539 0 .4668-.0109.9445-.0272 1.4113-.0652.4668-.038.8577-.0923 1.1725-.1629.7219-.1684 1.319-.3965 1.8021-.6843.4831-.2878.8739-.6354 1.1725-1.0481.2985-.4073.5428-.8852.7219-1.4228.1792-.543.342-1.1458.4886-1.8192h.4342v11.3607h-.4342c-.19-.7711-.4886-1.564-.8848-2.3786-.3963-.82-.8088-1.4282-1.2431-1.8409-.3854-.3367-.8467-.6137-1.3896-.8309-.5428-.2172-1.1724-.3476-1.8944-.3964-.3582-.0218-.6622-.0435-.901-.0543-.2389-.0109-.4831-.0163-.722-.0163h-1.6827c-.0163.3801-.0488 2.8021-.0488 3.4973v2.3079c0 .3856.0054.7495.0162 1.1025.0109.3475.0163.6408.0163.8851.0217.7712.0652.744.1249 1.4283.0597.6842.228 1.4445.4451 1.7812s.7165.505 1.5307.6517c.8142.1412 1.7913.1737 2.7521.1737.4071 0 2.3069-.0054 3.5065-.228.7654-.1412 1.3679-.3204 2.0139-.5974.6513-.277 1.0639-.4344 1.8726-1.0644.5971-.467.9771-.858 1.6176-1.526.7002-.7331 1.2539-1.3956 1.9541-2.4274l.3963.1086-1.7967 6.8968zM147.102 97.9457c-.098-.0489-.206-.114-.326-.1955-.119-.0869-.249-.2118-.396-.3801-1.536-1.7812-2.996-3.4702-4.38-5.0667-1.385-1.5966-2.818-3.2149-4.305-4.8495-.624-.6952-1.053-1.1296-1.281-1.2979-.228-.1684-.429-.2498-.597-.2498-.196 0-.32.0271-.402.0923-.087.0706-.157.152-.179.4507v3.5679c0 1.1078.011 2.0527.038 2.851.022.6951.071 1.3468.141 1.9496.071.6028.228 1.059.467 1.3685.168.239.396.4453.684.6137.288.1683.602.3041.939.4127.337.1086.668.1955.993.2498.326.0597.608.1032.847.1249v.3584h-11.573v-.3584c.603-.0978 1.178-.239 1.732-.4345.554-.19.972-.4561 1.265-.7928.119-.1412.217-.3584.287-.6462.071-.2879.125-.6191.163-.9938.038-.3748.06-.7712.071-1.1893.011-.4182.016-.8255.016-1.2111 0-.3366.006-.7928.016-1.3685.011-.5756.017-1.2001.017-1.8735v-2.1288V77.82c0-.9123-.033-1.754-.093-2.5252-.059-.7711-.222-1.3196-.488-1.6563-.337-.4073-.744-.7114-1.227-.9015-.483-.19-1.031-.3258-1.655-.3964v-.3584h11.176v.3584c-.456.0489-.901.114-1.335.1955-.435.0869-.82.2661-1.156.5431-.337.2769-.619.6896-.847 1.2436-.228.5539-.353 1.3359-.38 2.346-.022.5539-.044 1.0698-.054 1.5531-.011.4833-.017 1.0318-.017 1.6563v5.2351c.472-.1521 1.015-.3584 1.748-.9992.733-.6354 1.504-1.3522 2.307-2.1451.803-.7929 1.601-1.6129 2.399-2.4546.793-.8418 1.477-1.5749 2.052-2.1994.407-.4779.776-.9721 1.102-1.4771.326-.5051.489-.9612.489-1.3685 0-.6951-.239-1.2002-.722-1.5152-.484-.3149-1.032-.5159-1.656-.6136v-.3584h9.662v.3584c-1.227.1195-2.464.6354-3.713 1.5531-1.248.9124-2.524 1.9713-3.821 3.1715-.505.4562-1.021.9503-1.547 1.4771-.532.5268-1.053 1.059-1.569 1.5857-.516.5268-1.02 1.0427-1.514 1.5314-.494.4942-.945.9558-1.352 1.3903.19.2389.635.7657 1.335 1.5694.695.8037 1.526 1.7486 2.486 2.8293.961 1.0807 1.987 2.2374 3.084 3.4593 1.091 1.2273 2.144 2.4057 3.153 3.5353.239.2878.516.5756.831.8635.315.2878.613.5484.901.7765.288.2281.543.429.754.5974.218.1683.359.2661.435.2878.314.1195.738.239 1.281.3584.543.1195 1.145.2064 1.818.2498v.3585h-8.104v.0108zM157.079 97.9458v-.3584c.602-.0977 1.161-.2498 1.677-.467.516-.2172.955-.5268 1.314-.9395.119-.1466.211-.3476.271-.6137.06-.266.109-.5756.147-.9394.038-.3585.059-.7386.07-1.135.011-.3965.016-.7875.016-1.173 0-.3367.006-.7929.017-1.3685.011-.5757.021-1.211.038-1.8953.011-.6842.016-1.3902.016-2.1071v-9.1287-1.2979c0-.4345-.016-.8364-.054-1.2111-.038-.3747-.093-.7114-.163-1.01-.071-.2987-.179-.5322-.326-.706-.336-.4073-.749-.7006-1.243-.8852-.494-.1792-1.053-.3041-1.677-.3801v-.3585h10.78v.3585c-.505.0706-1.048.2063-1.623.3964-.575.1901-1.02.5756-1.335 1.1567-.217.4073-.331.9232-.342 1.5477-.011.6245-.033 1.2165-.055 1.7649 0 .6028-.005 1.1948-.016 1.7867-.011.5865-.016 1.1839-.016 1.7867V92.8465c0 .6952.011 1.3685.038 2.0202.022.6517.13 1.1078.326 1.3685.287.4073.743.7223 1.367.9395.625.2172 1.189.3476 1.694.3964v.3584h-10.921v.0163zM125.737 79.8023c-.603-1.5857-1.466-2.9868-2.595-4.2033-1.129-1.211-2.508-2.1831-4.125-2.8999-1.216-.543-2.551-.8797-4.001-1.0155v.782c.749.1846 1.444.4779 2.074.896 1.129.7549 2.073 1.7432 2.828 2.9543.754 1.2164 1.319 2.5686 1.693 4.0566.375 1.4934.56 2.9705.56 4.4368 0 1.5151-.185 3.0302-.56 4.5454-.374 1.5151-.933 2.8782-1.677 4.0946-.744 1.2165-1.677 2.2048-2.795 2.976-.641.4398-1.357.7385-2.128.9286v.6245c1.134-.1521 2.231-.4182 3.278-.8309 1.645-.6517 3.089-1.5748 4.327-2.775 1.237-1.2002 2.214-2.6175 2.936-4.2576.722-1.6346 1.08-3.4158 1.08-5.3382.006-1.7269-.293-3.3887-.895-4.9744zM111.227 97.3538c-.727-.1737-1.4-.4398-2.019-.8145-1.14-.6952-2.09-1.6238-2.85-2.7751-.76-1.1512-1.33-2.4872-1.71-4.0023-.385-1.5151-.575-3.09-.575-4.7246 0-1.564.174-3.1063.521-4.6323.348-1.5259.89-2.889 1.623-4.0946.733-1.2001 1.672-2.1831 2.812-2.9379.662-.4399 1.4-.7332 2.198-.9178v-.6571c-1.053.1466-2.073.391-3.061.7494-1.694.6137-3.17 1.4934-4.435 2.6338-1.265 1.1405-2.263 2.5361-3.013 4.1816-.7432 1.6454-1.1177 3.5027-1.1177 5.5717 0 1.9496.3528 3.7308 1.0637 5.3546.711 1.6237 1.677 3.0194 2.899 4.1815 1.227 1.1676 2.654 2.0691 4.288 2.7044 1.08.4236 2.204.6897 3.371.8309v-.6517h.005z" />
          </g>

          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0h168v98H0z" />
            </clipPath>
          </defs>
        </svg>
        <p className="Hero-Title">Timeless Fashion</p>
        <button className="Shop-Button">
          <a className="Shop-Button-Text" href="https://google.com">
            Shop Online
          </a>
        </button>
      </div>
    </Container>
  );
}

export default HeroSection;
