import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {AuthServices} from './auth.service';
@Injectable({
  providedIn: "root"
})
export class NoticesService{


  constructor(
    private httpClient: HttpClient,
    private authService: AuthServices
  ) { }

  product(){
    return this.httpClient.get(this.authService.API + 'product/all', {headers: this.authService.headers});
  }

  asignar_array(){
    this.product().subscribe((Noticias)=>{
      let noticiasdatos = Noticias['data'];
      localStorage.setItem('Noticias', JSON.stringify(noticiasdatos))
      this.arraynotices=JSON.parse(localStorage.getItem('Noticias'))
      console.log(this.arraynotices)

    })
  }



  arraynotices:any;

  arraydetail:any;





  notices:any[] = [
    {
      "id": 0,
      "titulo": "La Fuerza Aérea Colombiana adquiere 93 pistolas (made in Colombia) Córdova Estándar 3.0-RMR",
      "imagen": 'assets/images_news/cordova%203.0.png',
      "resumen": "La Fuerza Aérea Colombiana (FAC) ha adquirido 93 pistolas Indumil Córdova Estándar 3.0-RMR de 9x19 mm, por valores totales aproximados a los 59.000 dólares.",
      "contenido": "La Fuerza Aérea Colombiana (FAC) ha adquirido 93 pistolas Indumil Córdova Estándar 3.0-RMR de 9x19 mm, por valores totales aproximados a los 59.000 dólares. La compra forma parte de un contrato firmado entre la FAC y el fabricante colombiano durante el segundo semestre del presente año, que incluye el entrenamiento y capacitación en el " +
        "manejo y mantenimiento del arma, con destino a unidades operacionales y tripulaciones de vuelo de la Fuerza Aérea.\n" +
        "Las pistolas son del tipo 3.0-RMR (lista para miras ópticos), personalizadas con los logos de la Fuerza Aérea y adquiridas con base a los excelentes resultados operacionales que el arma ha brindado al Ejército, al Cuerpo Técnico de Investigación, a la Unidad Nacional de Protección y a los grupos Gaulas del Comando General de las Fuerzas Militares.\n" +
        'Impulso para la exportación del modelo' +
        "Esta venta es una muestra además de la confianza que los productos y sistemas diseñados y desarrollados por Indumil vienen generando en el mercado regional y se constituye, sin duda, en un importante impulso para la comercialización internacional de la Córdova 3.0, pistola que ya es del interés de potenciales clientes, tanto en América como en Oriente Medio. " +
        "La Córdova 3.0 es una pistola semiautomática en constante evolución, gracias a que recoge directamente la experiencia de sus usuarios introduciéndosele una serie de cambios y mejoras, que la han convertido en un arma confiable, precisa, ergonómica, balanceada, suave, producto del desarrollo tecnológico 100% colombiano, que le garantiza a todos sus portadores un" +
        " eficiente y cómodo funcionamiento. Con este proceso, se ha superado ya la cifra de 12.000 Córdovas vendidas a usuarios militares y civiles, estos últimos tanto en el mercado nacional como internacional.",
      "comentarios" : []
    },
    {
      "id": 1,
      "titulo": "Colombia logra transmitir datos en tiempo real desde sus T-90",
      "imagen": "assets/images_news/t90.png",
      "resumen": "Esta nueva capacidad fue producto de pruebas realizadas en la Escuela Militar de Aviación (Emavi), por medio de la Oficina de Certificación Aeronáutica de la Defensa (Secad)",
      "contenido": "Esta nueva capacidad fue producto de pruebas realizadas en la Escuela Militar de Aviación (Emavi), por medio de la Oficina de Certificación Aeronáutica de la Defensa (Secad), logrando la transmisión de 27 diferentes datos desde un T-90.\n" +
        "Este avance en las capacidades aeronáuticas de la FAC permitiría su futura certificación como nuevo producto tecnológico desarrollado, diseñado y empleado en el escuadrón de aviones de entrenamiento Calima,\n" +
        "la Fuerza Aérea Colombiana (FAC) ha informado que ha obtenido la capacidad de transmitir datos desde sus aviones CIAC/Lancair T-90 Calima, en tiempo real.\n" +
        ",la información fue enviada desde el FAC-2457 hacia una estación en tierra, en donde pudieron ser visualizados en tiempo real, así como las mediciones de sistemas tales como el anemómetros, el horizonte \n" +
        "artificial, el altímetro, el indicador de dirección, el GPS y la traza de mapas.",
      "comentarios" : []
    },
    {
      "id": 2,
      "titulo": "Ingenieros Militares e Ingenieros de Invias instalan Puente Modular Acrow TBR3 en Caqueta",
      "imagen": "assets/images_news/puente.jpg",
      "resumen": "Nuestros ingenieros militares y tropas de la Sexta División, en articulación con el Instituto Nacional de Vías - Invías, culminaron con éxito la instalación de un puente militar en el kilómetro 38 de la vía Florencia - Suaza",
      "contenido": "Nuestros ingenieros militares y tropas de la Sexta División, en articulación con el Instituto Nacional de Vías - Invías, culminaron con éxito la instalación de un puente militar en el kilómetro 38 de la vía Florencia - Suaza, para restablecer la movilidad del #Caquetá hacia el interior del país.\n" +
        "Después de 33 días de cierre total fue habilitada la vía Suaza-Florencia.\n" +
        "Sobre el medio día de hoy Lunes festivo el director Nacional del INVIAS, Juan Esteban Gil, el Gobernador de Caquetá y el Alcalde de Florencia dieron apertura al paso de toda clase de vehículos por el puente metálico provisional instalado en el kilómetro 38+180, de ésta manera se recuperó la movilidad en la carretera Suaza-Florencia después de más de un mes de cierre total.\n" +
        "El tránsito por este importante corredor vial será permanente con algunas restricciones para adelantar obras complementarias en este punto donde habrá paso escalonado ya que por el puente solamente puede transitar un vehículo,\n" +
        "el Director Nacional del INVIAS Juan Esteban Gil, aseguró que ésta es una obra prioritaria para la conectividad del Caquetá con el interior del País, el funcionario ratificó la inversión de $ 70 mil millones de pesos para la intervención de los puntos críticos de la carretera Suaza-Florencia.\n" +
        "Por su parte el gobernador Arnulfo Gasca Trujillo, agradeció a la Vicepresidente de la República, director Nacional del INVIAS y a los ingenieros militares por esta obra qur garantiza la movilidad entre el Caquetá y el resto del País, una inversión que según el jefe de gobierno seccional permitirá reactivar la economía regional.\n" +
        "A su turno el Alcalde de Florencia Luis Antonio Ruiz Cicery, resaltó la importancia de la unión de la dirigencia regional y destacó la gestión del gobernador Arnulfo Gasca Trujillo ante el gobierno Nacional para superar la emergencia vial.\n" +
        "El puente metálico de 51.85 metros fue instalado por integrantes del batallón de ingenieros de operaciones especiales 90, en tiempo récord. En las labores para superar la emergencia también participaron ingenieros y operarios del INVIAS territorial Huila.",
      "comentarios" : []
    },
    {
      "id": 3,
      "titulo": "Fuerza Aérea de Colombia recibe el primero de tres C-130H Hercules",
      "imagen": "assets/images_news/c-130.jpg",
      "resumen": "La Fuerza Aérea Colombiana (FAC) recibió este martes la primera de tres aeronaves de transporte militar ‘Hércules’ C-130 entregadas por el Gobierno de Estados Unidos dentro de la cooperación bilateral, durante un acto encabezado por el Presidente de la República",
      "contenido": "La Fuerza Aérea Colombiana (FAC) recibió este martes la primera de tres aeronaves de transporte militar ‘Hércules’ C-130 entregadas por el Gobierno de Estados Unidos dentro de la cooperación bilateral, durante un acto encabezado por el Presidente de la República, Iván Duque Márquez,\n" +
        "al acto, efectuado en el Comando Aéreo de Transporte Militar (CATAM), asistieron los ministros de Relaciones Exteriores, Claudia Blum, y de Defensa, Carlos Holmes Trujillo; el Embajador de Estados Unidos en Colombia, Philip Goldberg; el Comandante de la Duodécima Fuerza Aérea de los EE.UU,\n" +
        "Mayor General Barry R. Cornish; el Comandante de las Fuerzas Militares, General Luis Fernando Navarro;  y el Comandante de la Fuerza Aérea Colombiana, General Ramsés Rueda,\n" +
        "“Es un gran honor para mí, Embajador Goldberg, recibir este elemento de cooperación, esta demostración clara de alianza entre nuestros pueblos”, señaló el Jefe de Estado, quien agradeció esta muestra de cooperación y dijo que es un símbolo de la “alianza indivisible” entre los dos países.\n" +
        "Agregó que la entrega “marca un hito, porque será la primera de tres aeronaves de esta dimensión que Estados Unidos dona a Colombia para fortalecer nuestra capacidad de control territorial y nuestra capacidad de desplegar tropas en el territorio, así como de movilizar ayuda humanitaria en las circunstancias que de esa manera lo ameriten”,\n" +
        "“Para nosotros no solamente se trata de una expresión de la colaboración militar, sino también de la colaboración de nuestras fuerzas aéreas”, sostuvo.\n" +
        "Entretanto, el Embajador de Estados Unidos explicó que el ‘Hércules’ que se incorporó a la FAC perteneció a la Guardia Nacional Aérea de los estados de Nueva York y Ohio, en misiones de reabastecimiento y en operaciones humanitarias en pueblos estadounidenses.\n" +
        "“Es un orgullo para nosotros hacer esta donación sabiendo que entra en manos de una Fuerza Aérea tan capacitada y profesional como la de Colombia”, manifestó Goldberg y agregó que su país “valora la amistad duradera con Colombia en todos los ámbitos”.\n",
      "comentarios" : []
        },
      {
      "id": 4,
      "titulo": "Entregada a la Armada de Colombia la nueva corbeta PCC \"Almirante Tono\"",
      "imagen": "assets/images_news/tono.jpeg",
      "resumen": "En la Base Naval de Jinhae en Corea del Sur, se llevó a cabo el pasado 28 de septiembre la ceremonia de transferencia de la Corbeta ROKS de la clase Pohang PCC-768 Iksan",
      "contenido": "En la Base Naval de Jinhae en Corea del Sur, se llevó a cabo el pasado 28 de septiembre la ceremonia de transferencia de la Corbeta ROKS de la clase Pohang PCC-768 Iksan a la Armada de Colombia, esta unidad que fue ofrecida tras la visita del primer ministro Lee Nak-Yeon en mayo del 2019 a Colombia, seria el segundo buque que Corea " +
        "del Sur transfiere a la ARC, tras haber incorporado en el año 2013 el ARC \"Nariño\", antigua ROKS Anyang PCC 755.",
      "comentarios" : []
    }

  ];



  pos = null;


}

