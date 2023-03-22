MainTitle = document.getElementById("MainTitle");
InfoTitle = document.getElementById("title_Info");
InfoText = document.getElementById("t_Info");
const letters = "abcdefghijklmnopqrstuvwxyz"


$(".item").click(function(e) {
    let iterations = 0;
    let interval;
    console.log(e.currentTarget.id);

    switch(e.currentTarget.id){
        case "i1":
        InfoText.innerHTML = "Conferencia en la que participaron los líderes de USA, UK y la URSS, para la repartición de los territorios disputados en la 2da Guerra Mundial.";
        break;

        case "i2":
        InfoText.innerHTML = "Conferencia en la que participaron los líderes más importantes del momento para establecer la división de Alemania en cuatro zonas de ocupación, la ampliación de las fronteras rusas y la creación de la comisión interaliada y la carta de las naciones.";
        break;

        case "i3":
        InfoText.innerHTML = "La doctrina Truman era una política exterior estadounidense que buscaba contener la expansión del comunismo a nivel mundial al comienzo de la Guerra Fría. Recibe su nombre del presidente Harry Truman y se basaba en ofrecer asistencia económica y militar a países para evitar que cayeran en la órbita soviética.";
        break;

        case "i4":
        InfoText.innerHTML = "La oficina de información de los partidos comunistas y obra, también conocida como Komifrom en ruso, fue una agencia de información e inteligencia fundada por Stalin y Tito. Su principal objetivo era el intercambio de inteligencia entre países comunistas además de ser una respuesta a la doctrina Truman.";
        break;

        case "i5":
        InfoText.innerHTML = "El Plan Marshall fue un programa que Estados Unidos impulsó para ayudar a los países europeos a recuperarse de la destrucción provocada por la Segunda Guerra Mundial. Fue presentado en 1947 por el secretario de Estado, George Marshall, y aunque su nombre oficial era European Recovery Plan ('Plan Europeo de Recuperación'), pronto se lo conoció como Plan Marshall.";
        break;

        case "i6":
        InfoText.innerHTML = "La Declaración de Independencia de Israel se produjo hace 73 años, el 14 de mayo de 1948 en el Museo de Arte de Tel Aviv, la capital del país. Esta tuvo lugar coincidiendo con la finalización legal del Mandato Británico de Palestina, que había controlado el territorio desde 1920. La resolución 181 (II) aprobada por la Organización de Naciones Unidas (ONU) determinaba la creación de un estado judío y de uno árabe aproximadamente iguales en extensión.";
        break;

        case "i7":
        InfoText.innerHTML = "La Revolución de Xinhaien, en China, entre 1911-1912 puso fin a 2.000 años de dinastías, el punto final a un país atrasado y en miseria, en el que la invasión de productos europeos frenaba el desarrollo de las riquezas de la nación y colocaba en decadencia a la potencia cultural en pleno siglo XIX.<br><br>El estallido de ese proceso revolucionario fundó la China republicana en lo que se considera uno de los sucesos históricos más relevantes de la humanidad, liderado por Sun Yat Zen, quien fundó el partido nacionalista, permitió que esa nación resaltara en áreas como la invención del papel, la imprenta, la seda, el sismógrafo, entre otros.";
        break;

        case "i8":
        InfoText.innerHTML = "La organización del tratado del Atlántico Norte, es una organización militar liderada por estados unidos que tuvo su primera intervención en la guerra de corea, fundando un consejo permanente.";
        break;

        case "i9":
        InfoText.innerHTML = "Fue un conflicto bélico entre algunos de los países aliados, corea del sur, corea del norte y china, por territorios y ambitos económicos de dichos territorios.";
        break;

        case "i10":
        InfoText.innerHTML = "No hay informacion.";
        break;

        case "i11":
        InfoText.innerHTML = "Por casi 30 años, Berlín estuvo dividida no solo por ideología, sino por una barrera de hormigón que serpenteó por la ciudad y funcionó como símbolo desagradable de la Guerra Fría. Los orígenes del muro datan de finales de la Segunda Guerra Mundial cuando Alemania estaba dividida en cuatro partes y ocupada por las potencias aliadas.<br><br>En 1949 las dos nuevas Alemanias habían sido oficialmente fundadas. La Alemania del Este socialista fue destruida por la pobreza y convulsionada por las huelgas en respuesta a sus nuevos sistemas políticos y económicos. Los alemanes orientales comenzaron a huir por una frontera más permeable entre Berlín Oriental y Occidental. En un momento, 1700 personas por día buscaban condición de refugiado al cruzar desde el este hacia el oeste de Berlín y alrededor de 3 millones de ciudadanos de la RDA pasaron a Alemania Occidental por Berlín Occidental entre 1949 y 1961.<br><br>Alemania Oriental levantó una pared de hormigón de 43 kilómetros que recorría toda la ciudad. El Muro tenía dos paredes paralelas con torres de vigilancia y separadas por una “franja de muerte” que finalizaba con corridas de perros de ataque, minas, alambres de púa y varios obstáculos diseñados para prevenir el escape. Los soldados de Alemania Oriental monitoreaban las barreras todo el tiempo, vigilaban Berlín Occidental y tenían órdenes de disparar a matar si veían a un fugitivo.Las personas intentaban escapar. Inicialmente, huían de las casas que estaban justo al lado del Muro; luego, aquellas casas fueron vaciadas y convertidas en fortificaciones para la Guerra misma. Otros planeaban escapes más riesgosos a través de túneles, en globos aerostáticos e, incluso en tren. Entre 1961 y 1989, más de 5000 personas lograron escapar exitosamente. Algunos no fueron tan afortunados; al menos 140 fueron asesinados o murieron intentando cruzar el Muro.<br><br>La Unión Soviética hizo lo propio, y, hoy en día, la caída del Muro de Berlín es vista como un símbolo del final de la Guerra Fría. En la actualidad, una doble hilera de adoquines marca el lugar donde una vez estuvo el muro.";
        break;

        case "i12":
        InfoText.innerHTML = "La crisis de los misiles, también llamada crisis de octubre o crisis del Caribe, fue un conflicto entre los Estados Unidos, la Unión Soviética y Cuba, que tuvo lugar en 1962.<br><br>La crisis se inició con el descubrimiento de rampas de misiles soviéticos en Cuba, el 15 de octubre, y se extendió hasta el anuncio de su desmantelamiento y traslado fuera del continente americano, el 28 de octubre. Sin embargo, la tensión se mantuvo hasta el 20 de noviembre, cuando los Estados Unidos pusieron fin a los patrullajes navales alrededor de Cuba.";
        break;

        case "i13":
        InfoText.innerHTML = "El teléfono rojo es un enlace de comunicación directa entre Rusia y los Estados Unidos destinada a que ambos países hablen en directo ante cualquier urgencia política o militar que ponga en peligro la paz entre las naciones.";
        break;

        case "i14":
        InfoText.innerHTML = "Conflicto en la península de Indochina que tuvo lugar entre mediados de los cincuenta y mediados de los setenta y que enfrentó a los EE.UU. y el gobierno de Vietnam del Sur  por un lado, contra Vietnam del Norte y las guerrillas comunistas que actuaban en Vietnam del Sur por otro. La guerra terminó extendiéndose también a Laos y Camboya.<br><br>Tuvo fin después de la avanzada final comunista, tomando saigón y haciendo que se rindan los survietnamitas, lo cual fue mucho más fácil después de que los estadounidenses de fueran de allí. Y fue un año después que se reunifico el país bajo el nombre de la República Socialista de Vietnam.";
        break;

        case "i15":
        InfoText.innerHTML = "Denominado Consenso de Washington se refiere al conjunto de medidas de política económica de corte neoliberal aplicadas a partir de los años ochenta para, por un lado, hacer frente a la reducción de la tasa de beneficio en los países del Norte tras la crisis económica de los setenta, y por otro, como salida impuesta por el Fondo Monetario Internacional (FMI) y el Banco Mundial (BM) a los países del Sur ante el estallido de la crisis de la deuda externa. Todo ello por medio de la condicionalidad macroeconómica vinculada a la financiación concedida por estos organismos.";
        break;

        case "i16":
        InfoText.innerHTML = "El 25 de diciembre de 1991, Mijaíl Gorbachov se transformó en el último gobernante de la Unión de Repúblicas Socialistas Soviéticas (URSS). Ese día anunciaba en un discurso televisado al país y al mundo que oficialmente esta superpotencia comunista dejaba de existir.<br><br>De esta forma, la Unión Soviética desaparecía tras casi 70 años y al mismo tiempo se ponía término a más de cuatro décadas de Guerra Fría: la confrontación bipolar entre Washington y Moscú, surgida tras el término de la Segunda Guerra Mundial.";
        break;

        case "i17":
        InfoText.innerHTML = "El 4 de octubre de 1957 la Unión Soviética lanzaba al espacio el Sputnik 1, que con 83 kilogramos y del tamaño aproximado de una pelota de baloncesto, se convirtió en el primer satélite de fabricación humana en orbitar la Tierra.";
        break;

        case "i18":
        InfoText.innerHTML = "El 3 de noviembre de 1957, la perra Laika se convirtió en el primer animal en viajar al espacio abordo del Sputnik 2. Una semana después del lanzamiento la perra murió debido a la falta de oxígeno.";
        break;

        case "i19":
        InfoText.innerHTML = "El 17 de mayo de 1958 la NASA ponía en órbita el Vanguard 1, el primer satélite alimentado por energía solar y una victoria importante para Estados Unidos en la carrera espacial. El primer ministro de la Unión Soviética en aquel momento, Nikita Jrushchov, lo despreció refiriéndose a él como «un pomelo». Sin embargo, los satélites Sputnik –considerablemente mayores– se salieron de su órbita y se calcinaron en su regreso a la Tierra en 1958, mientras que el Vanguard 1 todavía sigue en el espacio. A día de hoy sigue siendo el satélite artificial más antiguo presente en el espacio y se calcula que continuará en órbita alrededor de 240 años más.";
        break;

        case "i20":
        InfoText.innerHTML = "El 14 de septiembre de 1959 el Luna 2 de la URSS se convertía en el primer objeto terrestre en impactar en la Luna. En la imagen podemos observar a el luna 3.<br><br><br>El 7 de octubre de 1959 el satélite soviético Luna 3 tomaba las primeras imágenes de la cara oculta de la Luna.";
        break;

        case "i21":
        InfoText.innerHTML = "El 31 de enero de 1961 Ham el chimpancé se convertía en el primer homínido en viajar al espacio . Su vuelo duró 16 minutos y 39 segundos tras los que fue recatado en el océano Atlántico con solo una magulladura en la nariz.";
        break;

        case "i22":
        InfoText.innerHTML = "El 12 de abril de 1961, a bordo de la Vostok 1, Yuri Alekséyevich Gagarin se convirtió en el primer ser humano en viajar al espacio exterior.";
        break;

        case "i23":
        InfoText.innerHTML = "El 16 de junio de 1963, a bordo de la Vostok 6, Valentina Tereshkova se convertía en la primera mujer en viajar a espacio en una misión que se prologaría durante 3 días y durante los cuales completó 48 vueltas alrededor de la Tierra.";
        break;

        case "i24":
        InfoText.innerHTML = "El 18 de marzo de 1965 Alexei Arkhipovich Leonov, quien viajaba a bordo de la Voskhod 2, se convertía en el primer ser humano en realizar una caminata espacial permaneciendo fuera de la nave que compartía con el cosmonauta Pavel Belyayev durante 12 minutos.";
        break;

        case "i25":
        InfoText.innerHTML = "El 21 de diciembre de 1968 se produce el primer vuelo espacial tripulado por humanos en torno a la Luna. Se trata también del primer vuelo espacial humano en entrar en la influencia gravitatoria de otro cuerpo celeste. Su tripulación fue la primera  en la historia en ver la cara oculta de la Luna, así como los primeros en observar la Tierra desde nuestro satélite.<br><br>El 20 de Julio de 1969 Neil Armstrong y Buzz Aldrin se convertían en los dos primeros hombre en posarse en la Luna a bordo del modulo Lunar Eagle de la misión Apolo 11.";
        break;

        case "i26":
        InfoText.innerHTML = "El 3 de diciembre de 1973 la Pioneer 10 de la NASA se convierte en la primera sonda espacial en alcanzar la órbita de Júpiter.";
        break;

        case "i27":
        InfoText.innerHTML = "El 29 de marzo de 1974 la sonda Mariner 10 de la NASA se convierte en la primera en realizar un vuelo sobre el planeta mercurio.";
        break;

        case "i28":
        InfoText.innerHTML = "El 15 de julio de 1975 se producía en la órbita de la Tierra el acoplamiento de las naves Soyuz y Apolo 18. Se trato de la primera misión conjunta de las agencias espaciales de ambos países. Historiadores coinciden en que con este hecho se dio por finalizada la Guerra Fría.";
        break;


        default:
        InfoText.innerHTML = "La Segunda Guerra Mundial fue un conflicto armado que tuvo lugar entre los años de 1939 y 1945, y que involucró de manera directa o indirecta a la mayor parte de las potencias militares y económicas de la época, así como a numerosos países del Tercer Mundo.<br>Se la considera la guerra más dramática de la historia contemporánea, debido a la cantidad de personas involucradas, las enormes dimensiones territoriales del conflicto, la cantidad de armamento bélico empleado y las desgarradoras consecuencias históricas para la humanidad.";
        break;

    }

    MainTitle.innerHTML = e.currentTarget.dataset.value;

    interval = setInterval(() => 
    {
        InfoTitle.innerHTML = 
        e.currentTarget.dataset.value.split("").map((letter, index) =>
        {
            if(index < iterations){
                return document.getElementById(e.currentTarget.id).dataset.value[index];
            }

            else{
                return letters[Math.floor(Math.random() * 26)];
            }
        }).join("");
            
        if(iterations >= e.currentTarget.dataset.value.length) {
            iterations = 0;
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 40);
});