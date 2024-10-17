export const paises = [
    { value: 1, label: "Chile" },
]

export const regiones = [
    { value: 1, label: "Arica y Parinacota", id_pais: 1 },
    { value: 2, label: "Tarapacá", id_pais: 1 },
    { value: 3, label: "Antofagasta", id_pais: 1 },
    { value: 4, label: "Atacama", id_pais: 1 },
    { value: 5, label: "Coquimbo", id_pais: 1 },
    { value: 6, label: "Valparaíso", id_pais: 1 },
    { value: 7, label: "Metropolitana de Santiago", id_pais: 1 },
    { value: 8, label: "Libertador General Bernardo O’Higgins", id_pais: 1 },
    { value: 9, label: "Maule", id_pais: 1 },
    { value: 10, label: "Ñuble", id_pais: 1 },
    { value: 11, label: "Biobío", id_pais: 1 },
    { value: 12, label: "La Araucanía", id_pais: 1 },
    { value: 13, label: "Los Ríos", id_pais: 1 },
    { value: 14, label: "Los Lagos", id_pais: 1 },
    { value: 15, label: "Aysén del General Carlos Ibáñez del Campo", id_pais: 1 },
    { value: 16, label: "Magallanes y de la Antártica Chilena" }
];

export const provincias = [
    { value: 1, label: "Arica", id_region: 1 },
    { value: 2, label: "Parinacota", id_region: 1 },
    { value: 3, label: "Iquique", id_region: 2 },
    { value: 4, label: "Tamarugal", id_region: 2 },
    { value: 5, label: "Tocopilla", id_region: 3 },
    { value: 6, label: "El Loa", id_region: 3 },
    { value: 7, label: "Antofagasta", id_region: 3 },
    { value: 8, label: "Copiapó", id_region: 4 },
    { value: 9, label: "Chañaral", id_region: 4 },
    { value: 10, label: "Huasco", id_region: 4 },
    { value: 11, label: "Elqui", id_region: 5 },
    { value: 12, label: "Limarí", id_region: 5 },
    { value: 13, label: "Choapa", id_region: 5 },
    { value: 14, label: "Petorca", id_region: 6 },
    { value: 15, label: "Los Andes", id_region: 6 },
    { value: 16, label: "San Felipe de Aconcagua", id_region: 6 },
    { value: 17, label: "Quillota", id_region: 6 },
    { value: 18, label: "Marga Marga", id_region: 6 },
    { value: 19, label: "Valparaíso", id_region: 6 },
    { value: 20, label: "San Antonio", id_region: 6 },
    { value: 21, label: "Isla de Pascua", id_region: 6 },
    { value: 22, label: "Chacabuco", id_region: 7 },
    { value: 23, label: "Cordillera", id_region: 7 },
    { value: 24, label: "Maipo", id_region: 7 },
    { value: 25, label: "Santiago", id_region: 7 },
    { value: 26, label: "Talagante", id_region: 7 },
    { value: 27, label: "Melipilla", id_region: 7 },
    { value: 28, label: "Cachapoal", id_region: 8 },
    { value: 29, label: "Cardenal Caro", id_region: 8 },
    { value: 30, label: "Colchagua", id_region: 8 },
    { value: 31, label: "Cauquenes", id_region: 9 },
    { value: 32, label: "Curicó", id_region: 9 },
    { value: 33, label: "Linares", id_region: 9 },
    { value: 34, label: "Talca", id_region: 9 },
    { value: 35, label: "Diguillín", id_region: 10 },
    { value: 36, label: "Punilla", id_region: 10 },
    { value: 37, label: "Itata", id_region: 10 },
    { value: 38, label: "Arauco", id_region: 11 },
    { value: 39, label: "Bíobío", id_region: 11 },
    { value: 40, label: "Concepción", id_region: 11 },
    { value: 41, label: "Cautín", id_region: 12 },
    { value: 42, label: "Malleco", id_region: 12 },
    { value: 43, label: "Valdivia", id_region: 13 },
    { value: 44, label: "Ranco", id_region: 13 },
    { value: 45, label: "Chiloé", id_region: 14 },
    { value: 46, label: "Llanquihue", id_region: 14 },
    { value: 47, label: "Osorno", id_region: 14 },
    { value: 48, label: "Palena", id_region: 14 },
    { value: 49, label: "Coyhaique", id_region: 15 },
    { value: 50, label: "Aysén", id_region: 15 },
    { value: 51, label: "Capitán Prat", id_region: 15 },
    { value: 52, label: "General Carrera", id_region: 15 },
    { value: 53, label: "Última Esperanza", id_region: 16 },
    { value: 54, label: "Magallanes", id_region: 16 },
    { value: 55, label: "Tierra del Fuego", id_region: 16 },
    { value: 56, label: "Antártica Chilena", id_region: 16 }
];

export const comunas = [
    {
        value: 1,
        label: "Arica",
        id_provincia: 1
    },
    {
        value: 2,
        label: "Camarones",
        id_provincia: 1
    },
    {
        value: 3,
        label: "Putre",
        id_provincia: 2
    },
    {
        value: 4,
        label: "General Lagos",
        id_provincia: 2
    },
    {
        value: 5,
        label: "Iquique",
        id_provincia: 3
    },
    {
        value: 6,
        label: "Alto Hospicio",
        id_provincia: 3
    },
    {
        value: 7,
        label: "Pozo Almonte",
        id_provincia: 4
    },
    {
        value: 8,
        label: "Camiña",
        id_provincia: 4
    },
    {
        value: 9,
        label: "Colchane",
        id_provincia: 4
    },
    {
        value: 10,
        label: "Tocopilla",
        id_provincia: 5
    },
    {
        value: 11,
        label: "María Elena",
        id_provincia: 5
    },
    {
        value: 12,
        label: "Calama",
        id_provincia: 6
    },
    {
        value: 13,
        label: "San Pedro de Atacama",
        id_provincia: 6
    },
    {
        value: 14,
        label: "Ollagüe",
        id_provincia: 6
    },
    {
        value: 15,
        label: "Antofagasta",
        id_provincia: 7
    },
    {
        value: 16,
        label: "Mejillones",
        id_provincia: 7
    },
    {
        value: 17,
        label: "Sierra Gorda",
        id_provincia: 7
    },
    {
        value: 18,
        label: "Taltal",
        id_provincia: 7
    },
    {
        value: 19,
        label: "Copiapó",
        id_provincia: 8
    },
    {
        value: 20,
        label: "Caldera",
        id_provincia: 8
    },
    {
        value: 21,
        label: "Tierra Amarilla",
        id_provincia: 8
    },
    {
        value: 22,
        label: "Chañaral",
        id_provincia: 9
    },
    {
        value: 23,
        label: "Diego de Almagro",
        id_provincia: 9
    },
    {
        value: 24,
        label: "El Salado",
        id_provincia: 9
    },
    {
        value: 25,
        label: "Vallenar",
        id_provincia: 10
    },
    {
        value: 26,
        label: "Huasco",
        id_provincia: 10
    },
    {
        value: 27,
        label: "Freirina",
        id_provincia: 10
    },
    {
        value: 28,
        label: "Alto del Carmen",
        id_provincia: 10
    },
    {
        value: 29,
        label: "La Serena",
        id_provincia: 11
    },
    {
        value: 30,
        label: "Coquimbo",
        id_provincia: 11
    },
    {
        value: 31,
        label: "Vicuña",
        id_provincia: 11
    },
    {
        value: 32,
        label: "Paihuano",
        id_provincia: 11
    },
    {
        value: 33,
        label: "Andacollo",
        id_provincia: 11
    },
    {
        value: 34,
        label: "Ovalle",
        id_provincia: 12
    },
    {
        value: 35,
        label: "Monte Patria",
        id_provincia: 12
    },
    {
        value: 36,
        label: "Punitaqui",
        id_provincia: 12
    },
    {
        value: 37,
        label: "Combarbalá",
        id_provincia: 12
    },
    {
        value: 38,
        label: "Río Hurtado",
        id_provincia: 12
    },
    {
        value: 39,
        label: "Illapel",
        id_provincia: 13
    },
    {
        value: 40,
        label: "Salamanca",
        id_provincia: 13
    },
    {
        value: 41,
        label: "Los Vilos",
        id_provincia: 13
    },
    {
        value: 42,
        label: "Canela",
        id_provincia: 13
    },
    {
        value: 43,
        label: "Petorca",
        id_provincia: 14
    },
    {
        value: 44,
        label: "Cabildo",
        id_provincia: 14
    },
    {
        value: 45,
        label: "La Ligua",
        id_provincia: 14
    },
    {
        value: 46,
        label: "Papudo",
        id_provincia: 14
    },
    {
        value: 47,
        label: "Zapallar",
        id_provincia: 14
    },
    {
        value: 48,
        label: "Los Andes",
        id_provincia: 15
    },
    {
        value: 49,
        label: "Calle Larga",
        id_provincia: 15
    },
    {
        value: 50,
        label: "Rinconada",
        id_provincia: 15
    },
    {
        value: 51,
        label: "San Esteban",
        id_provincia: 15
    },
    {
        value: 52,
        label: "San Felipe",
        id_provincia: 16
    },
    {
        value: 53,
        label: "Llaillay",
        id_provincia: 16
    },
    {
        value: 54,
        label: "Putaendo",
        id_provincia: 16
    },
    {
        value: 55,
        label: "Santa María",
        id_provincia: 16
    },
    {
        value: 56,
        label: "Catemu",
        id_provincia: 16
    },
    {
        value: 57,
        label: "Panquehue",
        id_provincia: 16
    },
    {
        value: 58,
        label: "Quillota",
        id_provincia: 17
    },
    {
        value: 59,
        label: "La Cruz",
        id_provincia: 17
    },
    {
        value: 60,
        label: "La Calera",
        id_provincia: 17
    },
    {
        value: 61,
        label: "Nogales",
        id_provincia: 17
    },
    {
        value: 62,
        label: "Hijuelas",
        id_provincia: 17
    },
    {
        value: 63,
        label: "Villa Alemana",
        id_provincia: 18
    },
    {
        value: 64,
        label: "Quilpué",
        id_provincia: 18
    },
    {
        value: 65,
        label: "Limache",
        id_provincia: 18
    },
    {
        value: 66,
        label: "Olmué",
        id_provincia: 18
    },
    {
        value: 67,
        label: "Valparaíso",
        id_provincia: 19
    },
    {
        value: 68,
        label: "Viña del Mar",
        id_provincia: 19
    },
    {
        value: 69,
        label: "Concón",
        id_provincia: 19
    },
    {
        value: 70,
        label: "Juan Fernández",
        id_provincia: 19
    },
    {
        value: 71,
        label: "Puchuncaví",
        id_provincia: 19
    },
    {
        value: 72,
        label: "San Antonio",
        id_provincia: 20
    },
    {
        value: 73,
        label: "Algarrobo",
        id_provincia: 20
    },
    {
        value: 74,
        label: "Cartagena",
        id_provincia: 20
    },
    {
        value: 75,
        label: "El Quisco",
        id_provincia: 20
    },
    {
        value: 76,
        label: "El Tabo",
        id_provincia: 20
    },
    {
        value: 77,
        label: "Santo Domingo",
        id_provincia: 20
    },
    {
        value: 78,
        label: "Isla de Pascua",
        id_provincia: 21
    },
    {
        value: 79,
        label: "Hanga Roa",
        id_provincia: 21
    },
    {
        value: 80,
        label: "Colina",
        id_provincia: 22
    },
    {
        value: 81,
        label: "Lampa",
        id_provincia: 22
    },
    {
        value: 82,
        label: "Tiltil",
        id_provincia: 22
    },
    {
        value: 83,
        label: "Puente Alto",
        id_provincia: 23
    },
    {
        value: 84,
        label: "Pirque",
        id_provincia: 23
    },
    {
        value: 85,
        label: "San José de Maipo",
        id_provincia: 23
    },
    {
        value: 86,
        label: "San Bernardo",
        id_provincia: 24
    },
    {
        value: 87,
        label: "Buin",
        id_provincia: 24
    },
    {
        value: 88,
        label: "Paine",
        id_provincia: 24
    },
    {
        value: 89,
        label: "Calera de Tango",
        id_provincia: 24
    },
    {
        value: 90,
        label: "Santiago",
        id_provincia: 25
    },
    {
        value: 91,
        label: "Cerrillos",
        id_provincia: 25
    },
    {
        value: 92,
        label: "Cerro Navia",
        id_provincia: 25
    },
    {
        value: 93,
        label: "Conchalí",
        id_provincia: 25
    },
    {
        value: 94,
        label: "El Bosque",
        id_provincia: 25
    },
    {
        value: 95,
        label: "Estación Central",
        id_provincia: 25
    },
    {
        value: 96,
        label: "Huechuraba",
        id_provincia: 25
    },
    {
        value: 97,
        label: "Independencia",
        id_provincia: 25
    },
    {
        value: 98,
        label: "La Cisterna",
        id_provincia: 25
    },
    {
        value: 99,
        label: "La Granja",
        id_provincia: 25
    },
    {
        value: 100,
        label: "La Florida",
        id_provincia: 25
    },
    {
        value: 101,
        label: "La Pintana",
        id_provincia: 25
    },
    {
        value: 102,
        label: "La Reina",
        id_provincia: 25
    },
    {
        value: 103,
        label: "Las Condes",
        id_provincia: 25
    },
    {
        value: 104,
        label: "Lo Barnechea",
        id_provincia: 25
    },
    {
        value: 105,
        label: "Lo Espejo",
        id_provincia: 25
    },
    {
        value: 106,
        label: "Lo Prado",
        id_provincia: 25
    },
    {
        value: 107,
        label: "Macul",
        id_provincia: 25
    },
    {
        value: 108,
        label: "Maipú",
        id_provincia: 25
    },
    {
        value: 109,
        label: "Ñuñoa",
        id_provincia: 25
    },
    {
        value: 110,
        label: "Pedro Aguirre Cerda",
        id_provincia: 25
    },
    {
        value: 111,
        label: "Peñalolén",
        id_provincia: 25
    },
    {
        value: 112,
        label: "Providencia",
        id_provincia: 25
    },
    {
        value: 113,
        label: "Pudahuel",
        id_provincia: 25
    },
    {
        value: 114,
        label: "Quilicura",
        id_provincia: 25
    },
    {
        value: 115,
        label: "Quinta Normal",
        id_provincia: 25
    },
    {
        value: 116,
        label: "Recoleta",
        id_provincia: 25
    },
    {
        value: 117,
        label: "Renca",
        id_provincia: 25
    },
    {
        value: 118,
        label: "San Joaquín",
        id_provincia: 25
    },
    {
        value: 119,
        label: "San Miguel",
        id_provincia: 25
    },
    {
        value: 120,
        label: "San Ramón",
        id_provincia: 25
    },
    {
        value: 121,
        label: "Vitacura",
        id_provincia: 25
    },
    {
        value: 122,
        label: "Talagante",
        id_provincia: 26
    },
    {
        value: 123,
        label: "El Monte",
        id_provincia: 26
    },
    {
        value: 124,
        label: "Isla de Maipo",
        id_provincia: 26
    },
    {
        value: 125,
        label: "Padre Hurtado",
        id_provincia: 26
    },
    {
        value: 126,
        label: "Peñaflor",
        id_provincia: 26
    },
    {
        value: 127,
        label: "Melipilla",
        id_provincia: 27
    },
    {
        value: 128,
        label: "Alhué",
        id_provincia: 27
    },
    {
        value: 129,
        label: "Curacaví",
        id_provincia: 27
    },
    {
        value: 130,
        label: "María Pinto",
        id_provincia: 27
    },
    {
        value: 131,
        label: "San Pedro",
        id_provincia: 27
    },
    {
        value: 132,
        label: "Rancagua",
        id_provincia: 28
    },
    {
        value: 133,
        label: "Codegua",
        id_provincia: 28
    },
    {
        value: 134,
        label: "Coinco",
        id_provincia: 28
    },
    {
        value: 135,
        label: "Coltauco",
        id_provincia: 28
    },
    {
        value: 136,
        label: "Doñihue",
        id_provincia: 28
    },
    {
        value: 137,
        label: "Graneros",
        id_provincia: 28
    },
    {
        value: 138,
        label: "Las Cabras",
        id_provincia: 28
    },
    {
        value: 139,
        label: "Machalí",
        id_provincia: 28
    },
    {
        value: 140,
        label: "Malloa",
        id_provincia: 28
    },
    {
        value: 141,
        label: "Mostazal",
        id_provincia: 28
    },
    {
        value: 142,
        label: "Olivar",
        id_provincia: 28
    },
    {
        value: 143,
        label: "Peumo",
        id_provincia: 28
    },
    {
        value: 144,
        label: "Pichidegua",
        id_provincia: 28
    },
    {
        value: 145,
        label: "Quinta de Tilcoco",
        id_provincia: 28
    },
    {
        value: 146,
        label: "Rengo",
        id_provincia: 28
    },
    {
        value: 147,
        label: "Requínoa",
        id_provincia: 28
    },
    {
        value: 148,
        label: "San Vicente",
        id_provincia: 28
    },
    {
        value: 149,
        label: "Pichilemu",
        id_provincia: 29
    },
    {
        value: 150,
        label: "La Estrella",
        id_provincia: 29
    },
    {
        value: 151,
        label: "Litueche",
        id_provincia: 29
    },
    {
        value: 152,
        label: "Marchihue",
        id_provincia: 29
    },
    {
        value: 153,
        label: "Navidad",
        id_provincia: 29
    },
    {
        value: 154,
        label: "Paredones",
        id_provincia: 29
    },
    {
        value: 155,
        label: "San Fernando",
        id_provincia: 30
    },
    {
        value: 156,
        label: "Chépica",
        id_provincia: 30
    },
    {
        value: 157,
        label: "Chimbarongo",
        id_provincia: 30
    },
    {
        value: 158,
        label: "Lolol",
        id_provincia: 30
    },
    {
        value: 159,
        label: "Nancagua",
        id_provincia: 30
    },
    {
        value: 160,
        label: "Palmilla",
        id_provincia: 30
    },
    {
        value: 161,
        label: "Peralillo",
        id_provincia: 30
    },
    {
        value: 162,
        label: "Placilla",
        id_provincia: 30
    },
    {
        value: 163,
        label: "Pumanque",
        id_provincia: 30
    },
    {
        value: 164,
        label: "Santa Cruz",
        id_provincia: 30
    },
    {
        value: 165,
        label: "Cauquenes",
        id_provincia: 31
    },
    {
        value: 166,
        label: "Chanco",
        id_provincia: 31
    },
    {
        value: 167,
        label: "Pelluhue",
        id_provincia: 31
    },
    {
        value: 168,
        label: "Curicó",
        id_provincia: 32
    },
    {
        value: 169,
        label: "Hualañé",
        id_provincia: 32
    },
    {
        value: 170,
        label: "Licantén",
        id_provincia: 32
    },
    {
        value: 171,
        label: "Molina",
        id_provincia: 32
    },
    {
        value: 172,
        label: "Rauco",
        id_provincia: 32
    },
    {
        value: 173,
        label: "Romeral",
        id_provincia: 32
    },
    {
        value: 174,
        label: "Sagrada Familia",
        id_provincia: 32
    },
    {
        value: 175,
        label: "Teno",
        id_provincia: 32
    },
    {
        value: 176,
        label: "Vichuquén",
        id_provincia: 32
    },
    {
        value: 177,
        label: "Linares",
        id_provincia: 33
    },
    {
        value: 178,
        label: "Colbún",
        id_provincia: 33
    },
    {
        value: 179,
        label: "Longaví",
        id_provincia: 33
    },
    {
        value: 180,
        label: "Parral",
        id_provincia: 33
    },
    {
        value: 181,
        label: "Retiro",
        id_provincia: 33
    },
    {
        value: 182,
        label: "San Javier",
        id_provincia: 33
    },
    {
        value: 183,
        label: "Villa Alegre",
        id_provincia: 33
    },
    {
        value: 184,
        label: "Yerbas Buenas",
        id_provincia: 33
    },
    {
        value: 185,
        label: "Talca",
        id_provincia: 34
    },
    {
        value: 186,
        label: "Constitución",
        id_provincia: 34
    },
    {
        value: 187,
        label: "Curepto",
        id_provincia: 34
    },
    {
        value: 188,
        label: "Empedrado",
        id_provincia: 34
    },
    {
        value: 189,
        label: "Maule",
        id_provincia: 34
    },
    {
        value: 190,
        label: "Pelarco",
        id_provincia: 34
    },
    {
        value: 191,
        label: "Pencahue",
        id_provincia: 34
    },
    {
        value: 192,
        label: "Río Claro",
        id_provincia: 34
    },
    {
        value: 193,
        label: "San Clemente",
        id_provincia: 34
    },
    {
        value: 194,
        label: "San Rafael",
        id_provincia: 34
    },
    {
        value: 195,
        label: "Bulnes",
        id_provincia: 35
    },
    {
        value: 196,
        label: "Chillán",
        id_provincia: 35
    },
    {
        value: 197,
        label: "Chillán Viejo",
        id_provincia: 35
    },
    {
        value: 198,
        label: "El Carmen",
        id_provincia: 35
    },
    {
        value: 199,
        label: "Pemuco",
        id_provincia: 35
    },
    {
        value: 200,
        label: "Pinto",
        id_provincia: 35
    },
    {
        value: 201,
        label: "Quillón",
        id_provincia: 35
    },
    {
        value: 202,
        label: "San Ignacio",
        id_provincia: 35
    },
    {
        value: 203,
        label: "Yungay",
        id_provincia: 35
    },
    {
        value: 204,
        label: "San Carlos",
        id_provincia: 36
    },
    {
        value: 205,
        label: "Coihueco",
        id_provincia: 36
    },
    {
        value: 206,
        label: "Ñiquén",
        id_provincia: 36
    },
    {
        value: 207,
        label: "San Fabián",
        id_provincia: 36
    },
    {
        value: 208,
        label: "San Nicolás",
        id_provincia: 36
    },
    {
        value: 209,
        label: "Cobquecura",
        id_provincia: 37
    },
    {
        value: 210,
        label: "Coelemu",
        id_provincia: 37
    },
    {
        value: 211,
        label: "Ninhue",
        id_provincia: 37
    },
    {
        value: 212,
        label: "Portezuelo",
        id_provincia: 37
    },
    {
        value: 213,
        label: "Quirihue",
        id_provincia: 37
    },
    {
        value: 214,
        label: "Ránquil",
        id_provincia: 37
    },
    {
        value: 215,
        label: "Treguaco",
        id_provincia: 37
    },
    {
        value: 216,
        label: "Arauco",
        id_provincia: 38
    },
    {
        value: 217,
        label: "Cañete",
        id_provincia: 38
    },
    {
        value: 218,
        label: "Contulmo",
        id_provincia: 38
    },
    {
        value: 219,
        label: "Curanilahue",
        id_provincia: 38
    },
    {
        value: 220,
        label: "Lebu",
        id_provincia: 38
    },
    {
        value: 221,
        label: "Los Álamos",
        id_provincia: 38
    },
    {
        value: 222,
        label: "Tirúa",
        id_provincia: 38
    },
    {
        value: 223,
        label: "Alto Biobío",
        id_provincia: 39
    },
    {
        value: 224,
        label: "Antuco",
        id_provincia: 39
    },
    {
        value: 225,
        label: "Cabrero",
        id_provincia: 39
    },
    {
        value: 226,
        label: "Laja",
        id_provincia: 39
    },
    {
        value: 227,
        label: "Los Ángeles",
        id_provincia: 39
    },
    {
        value: 228,
        label: "Mulchén",
        id_provincia: 39
    },
    {
        value: 229,
        label: "Nacimiento",
        id_provincia: 39
    },
    {
        value: 230,
        label: "Negrete",
        id_provincia: 39
    },
    {
        value: 231,
        label: "Quilaco",
        id_provincia: 39
    },
    {
        value: 232,
        label: "Quilleco",
        id_provincia: 39
    },
    {
        value: 233,
        label: "San Rosendo",
        id_provincia: 39
    },
    {
        value: 234,
        label: "Santa Bárbara",
        id_provincia: 39
    },
    {
        value: 235,
        label: "Tucapel",
        id_provincia: 39
    },
    {
        value: 236,
        label: "Yumbel",
        id_provincia: 39
    },
    {
        value: 237,
        label: "Concepción",
        id_provincia: 40
    },
    {
        value: 238,
        label: "Coronel",
        id_provincia: 40
    },
    {
        value: 239,
        label: "Chiguayante",
        id_provincia: 40
    },
    {
        value: 240,
        label: "Florida",
        id_provincia: 40
    },
    {
        value: 241,
        label: "Hualpén",
        id_provincia: 40
    },
    {
        value: 242,
        label: "Hualqui",
        id_provincia: 40
    },
    {
        value: 243,
        label: "Lota",
        id_provincia: 40
    },
    {
        value: 244,
        label: "Penco",
        id_provincia: 40
    },
    {
        value: 245,
        label: "San Pedro de la Paz",
        id_provincia: 40
    },
    {
        value: 246,
        label: "Santa Juana",
        id_provincia: 40
    },
    {
        value: 247,
        label: "Talcahuano",
        id_provincia: 40
    },
    {
        value: 248,
        label: "Tomé",
        id_provincia: 40
    },
    {
        value: 249,
        label: "Temuco",
        id_provincia: 41
    },
    {
        value: 250,
        label: "Carahue",
        id_provincia: 41
    },
    {
        value: 251,
        label: "Cunco",
        id_provincia: 41
    },
    {
        value: 252,
        label: "Curarrehue",
        id_provincia: 41
    },
    {
        value: 253,
        label: "Freire",
        id_provincia: 41
    },
    {
        value: 254,
        label: "Galvarino",
        id_provincia: 41
    },
    {
        value: 255,
        label: "Gorbea",
        id_provincia: 41
    },
    {
        value: 256,
        label: "Lautaro",
        id_provincia: 41
    },
    {
        value: 257,
        label: "Loncoche",
        id_provincia: 41
    },
    {
        value: 258,
        label: "Melipeuco",
        id_provincia: 41
    },
    {
        value: 259,
        label: "Nueva Imperial",
        id_provincia: 41
    },
    {
        value: 260,
        label: "Padre Las Casas",
        id_provincia: 41
    },
    {
        value: 261,
        label: "Perquenco",
        id_provincia: 41
    },
    {
        value: 262,
        label: "Pitrufquén",
        id_provincia: 41
    },
    {
        value: 263,
        label: "Pucón",
        id_provincia: 41
    },
    {
        value: 264,
        label: "Saavedra",
        id_provincia: 41
    },
    {
        value: 265,
        label: "Teodoro Schmidt",
        id_provincia: 41
    },
    {
        value: 266,
        label: "Toltén",
        id_provincia: 41
    },
    {
        value: 267,
        label: "Vilcún",
        id_provincia: 41
    },
    {
        value: 268,
        label: "Villarrica",
        id_provincia: 41
    },
    {
        value: 269,
        label: "Angol",
        id_provincia: 42
    },
    {
        value: 270,
        label: "Collipulli",
        id_provincia: 42
    },
    {
        value: 271,
        label: "Curacautín",
        id_provincia: 42
    },
    {
        value: 272,
        label: "Ercilla",
        id_provincia: 42
    },
    {
        value: 273,
        label: "Lonquimay",
        id_provincia: 42
    },
    {
        value: 274,
        label: "Los Sauces",
        id_provincia: 42
    },
    {
        value: 275,
        label: "Lumaco",
        id_provincia: 42
    },
    {
        value: 276,
        label: "Purén",
        id_provincia: 42
    },
    {
        value: 277,
        label: "Renaico",
        id_provincia: 42
    },
    {
        value: 278,
        label: "Traiguén",
        id_provincia: 42
    },
    {
        value: 279,
        label: "Victoria",
        id_provincia: 42
    },
    {
        value: 280,
        label: "Valdivia",
        id_provincia: 43
    },
    {
        value: 281,
        label: "Corral",
        id_provincia: 43
    },
    {
        value: 282,
        label: "Lanco",
        id_provincia: 43
    },
    {
        value: 283,
        label: "Los Lagos",
        id_provincia: 43
    },
    {
        value: 284,
        label: "Máfil",
        id_provincia: 43
    },
    {
        value: 285,
        label: "Mariquina",
        id_provincia: 43
    },
    {
        value: 286,
        label: "Paillaco",
        id_provincia: 43
    },
    {
        value: 287,
        label: "Panguipulli",
        id_provincia: 43
    },
    {
        value: 288,
        label: "La Unión",
        id_provincia: 44
    },
    {
        value: 289,
        label: "Futrono",
        id_provincia: 44
    },
    {
        value: 290,
        label: "Lago Ranco",
        id_provincia: 44
    },
    {
        value: 291,
        label: "Río Bueno",
        id_provincia: 44
    },
    {
        value: 292,
        label: "Castro",
        id_provincia: 45
    },
    {
        value: 293,
        label: "Ancud",
        id_provincia: 45
    },
    {
        value: 294,
        label: "Chonchi",
        id_provincia: 45
    },
    {
        value: 295,
        label: "Curaco de Vélez",
        id_provincia: 45
    },
    {
        value: 296,
        label: "Dalcahue",
        id_provincia: 45
    },
    {
        value: 297,
        label: "Puqueldón",
        id_provincia: 45
    },
    {
        value: 298,
        label: "Queilén",
        id_provincia: 45
    },
    {
        value: 299,
        label: "Quellón",
        id_provincia: 45
    },
    {
        value: 300,
        label: "Quemchi",
        id_provincia: 45
    },
    {
        value: 301,
        label: "Quinchao",
        id_provincia: 45
    },
    {
        value: 302,
        label: "Puerto Montt",
        id_provincia: 46
    },
    {
        value: 303,
        label: "Calbuco",
        id_provincia: 46
    },
    {
        value: 304,
        label: "Cochamó",
        id_provincia: 46
    },
    {
        value: 305,
        label: "Fresia",
        id_provincia: 46
    },
    {
        value: 306,
        label: "Frutillar",
        id_provincia: 46
    },
    {
        value: 307,
        label: "Los Muermos",
        id_provincia: 46
    },
    {
        value: 308,
        label: "Llanquihue",
        id_provincia: 46
    },
    {
        value: 309,
        label: "Maullín",
        id_provincia: 46
    },
    {
        value: 310,
        label: "Puerto Varas",
        id_provincia: 46
    },
    {
        value: 311,
        label: "Osorno",
        id_provincia: 47
    },
    {
        value: 312,
        label: "Puerto Octay",
        id_provincia: 47
    },
    {
        value: 313,
        label: "Purranque",
        id_provincia: 47
    },
    {
        value: 314,
        label: "Puyehue",
        id_provincia: 47
    },
    {
        value: 315,
        label: "Río Negro",
        id_provincia: 47
    },
    {
        value: 316,
        label: "San Juan de la Costa",
        id_provincia: 47
    },
    {
        value: 317,
        label: "San Pablo",
        id_provincia: 47
    },
    {
        value: 318,
        label: "Chaitén",
        id_provincia: 48
    },
    {
        value: 319,
        label: "Futaleufú",
        id_provincia: 48
    },
    {
        value: 320,
        label: "Hualaihué",
        id_provincia: 48
    },
    {
        value: 321,
        label: "Palena",
        id_provincia: 48
    },
    {
        value: 322,
        label: "Coyhaique",
        id_provincia: 49
    },
    {
        value: 323,
        label: "Lago Verde",
        id_provincia: 49
    },
    {
        value: 324,
        label: "Aysén",
        id_provincia: 50
    },
    {
        value: 325,
        label: "Cisnes",
        id_provincia: 50
    },
    {
        value: 326,
        label: "Guaitecas",
        id_provincia: 50
    },
    {
        value: 327,
        label: "Cochrane",
        id_provincia: 51
    },
    {
        value: 328,
        label: "O’Higgins",
        id_provincia: 51
    },
    {
        value: 329,
        label: "Tortel",
        id_provincia: 51
    },
    {
        value: 330,
        label: "Chile Chico",
        id_provincia: 52
    },
    {
        value: 331,
        label: "Río Ibáñez",
        id_provincia: 52
    },
    {
        value: 332,
        label: "Natales",
        id_provincia: 53
    },
    {
        value: 333,
        label: "Torres del Paine",
        id_provincia: 53
    },
    {
        value: 334,
        label: "Punta Arenas",
        id_provincia: 54
    },
    {
        value: 335,
        label: "Laguna Blanca",
        id_provincia: 54
    },
    {
        value: 336,
        label: "Río Verde",
        id_provincia: 54
    },
    {
        value: 337,
        label: "San Gregorio",
        id_provincia: 54
    },
    {
        value: 338,
        label: "Porvenir",
        id_provincia: 55
    },
    {
        value: 339,
        label: "Primavera",
        id_provincia: 55
    },
    {
        value: 340,
        label: "Timaukel",
        id_provincia: 55
    },
    {
        value: 341,
        label: "Cabo de Hornos (Ex Navarino)",
        id_provincia: 56
    },
    {
        value: 342,
        label: "Antártica",
        id_provincia: 56
    }
]