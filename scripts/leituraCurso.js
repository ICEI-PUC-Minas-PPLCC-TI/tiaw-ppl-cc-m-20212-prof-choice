/// <reference path="index.d.ts" />
/**
 * @type {{[key: string]: import(".").LeituraCurso}} //tipo, objeto,todos as propriedades dele string = [key: string]: string tipo dela tambem é uma string
 */
 const cursos = {
    1: {
      titulo: 'Ciencia da Computação',
      avaliacao: 4,
      imagem: 'imgs/ciencia.jpg',
      remuneracao: 'R$ 3000,00',
      empregados: '780 mil',
      textoprincipal: [
        'O profissional formado em Ciência da Computação atua basicamente na elaboração de programas de informática.',
        'Um bacharel em Ciência da Computação cria desde ferramentas simples, como um aplicativo financeiro para lançar despesas pessoais, até programas complexos de gerenciamento de produção ou de processamento de informações.',
        'Um cientista da computação, como é chamado o profissional formado em Ciência da Computação, pode ser contratado para trabalhar em uma equipe de desenvolvedores, criando software de acordo com a necessidade dos clientes. Também pode atuar no departamento de Pesquisa e Desenvolvimento (P&D)de uma empresa.',
      ],
      tituloramificacao: `Além de atuar como desenvolvedor ou programador, o cientista da computação pode trabalhar como:`,
      ramificacao: [
        {
          titulo: `Arquiteto de Software - `,
          texto: `É responsável por elaborar documentos e alguns modelos que especificam os requisitos para o desenvolvimento de um software.`,
        },
        {
          titulo: `Analista de Sistemas - `,
          texto: `Modela os sistemas e a infraestrutura que o software precisa para funcionar.`,
        },
        {
          titulo: `Gerente de TI - `,
          texto: `Gerencia os projetos de software, coordenando equipes e planejando o desenvolvimento de sistemas.`,
        },
        {
          titulo: `Docência ou Pesquisa - `,
          texto: `Trabalha como professor em instituições de ensino ou desenvolve pesquisas tecnológicas.`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Ciência da Computação:`,
      subtexto: `O curso de Ciência da Computação, também chamado de Ciências da Computação, possui muitas disciplinas de Matemática e boa parte da estrutura curricular é composta por disciplinas destinadas ao aprendizado das linguagens de programação mais utilizadas.`,
      caracteristica: ['Matemática', 'Trabalho em Equipe', 'Computação', 'IA'],
    },
    2: {
      titulo: 'Física Computacional',
      avaliacao: 5,
      imagem: 'imgs/fisicacomp.jpg',
      remuneracao: 'R$ 6670,00',
      empregados: '500 mil',
      textoprincipal: [
        'A Física Computacional tem como principal tarefa conseguir resolver situações que não é possível através dos estudos teóricos. Como é o caso da descoberta de sequências matemáticas, que não podem ser resolvidas por meio das equações matemáticas.',
        'O uso do computador tem possibilitado entender, aprofundar e desenvolver alternativas eficientes para fenômenos que estão além da controle humano como é caso das tempestades.',
        'É através dessa tecnologia que a ciência tem evoluído, principalmente na exploração de fenômenos considerados extremos, como é o caso das colisões de partículas subatômicas. É por meio desse conhecimento que são desenvolvidos os chamados supercomputadores.',
      ],
      tituloramificacao: `A área de Física Computacional abre portas para muitas ramificações inportantes para atualidade como:`,
      ramificacao: [
        {
          titulo: `Previsão do tempo - `,
          texto: `Prever o tempo envolve o estudo de conceitos geográficos, físicos e aplicação de uma série de cálculos matemáticos contendo análises combinatórias e estatística.`,
        },
        {
          titulo: `Astrofísica - `,
          texto: `A astrofísica é uma das ramificações mais conhecidas da Física Computacional. É por meio dela que é possível estimar/calcular a distância entre os planetas, a velocidade de qualquer corpo celeste e a mecânica dos movimentos em geral que rege as constelações e o universo.`,
        },
        {
          titulo: `Nanotecnologia - `,
          texto: `A nanotecnologia é uma ciência que envolve a manipulação da matéria (com o objetivo de criar novos materiais) a nível atômico.`,
        },
        {
          titulo: `Fusão nuclear - `,
          texto: `O processo de unificação de dois ou mais núcleos atômicos (fusão nuclear) é um recurso utilizado pela Física moderna para a obtenção de energia em escalas gigantescas.`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Física Computacional:`,
      subtexto: `O curso de Física Computacional possui muitas disciplinas de Matemática, estatística e boa parte da estrutura curricular é relacionada a linguagens de programação e supercomputadores.`,
      caracteristica: [
        'Matemática',
        'Trabalho em Equipe',
        'Computação',
        'Estatística',
        'Física',
      ],
    },
    3: {
      titulo: 'Direito',
      avaliacao: 5,
      imagem: 'imgs/direito2.jpg',
      remuneracao: 'R$ 6.373,89',
      empregados: '467 mil',
      textoprincipal: [
        'O profissional formado no curso de Direito podem optar por seguir a carreira jurídica ou se tornar advogado. A principal atividade de um advogado é representar e defender os interesses de seus clientes com base nas leis vigentes do país. Ele pode representar pessoas físicas e jurídicas. Outro campo que pode ser explorado pelo bacharel em Direito é a magistratura, uma das carreiras jurídicas mais desejadas entre os profissionais, mesmo com as grandes responsabilidades que envolvem a profissão.'
      ],
      tituloramificacao: `A área de Direito abre portas para muitas ramificações inportantes para atualidade como:`,
      ramificacao: [
        {
          titulo: `Direito Civil - `,
          texto: `É considerada a maior área do Direito brasileiro. Justamente por isso, envolve diferentes especializações. Ao escolher o Direito Civil e o Direito Processual Civil o profissional deverá lidar com a representação de interesses individuais e particulares relacionados a bens, propriedades e questões familiares.`,
        },
        {
          titulo: `Direito Ambiental - `,
          texto: `Nesta área, o profissional poderá atuar em ONGs e empresas privadas em questões referentes à responsabilidade com o meio ambiente. Portanto, licenciamento ambiental, infrações e outros aspectos da legislação ambiental farão parte de seu dia a dia.`,
        },
        {
          titulo: `Direito Digital - `,
          texto: `O Direito Digital é um dos novos ramos do Direito. E após o Marco Civil da Internet, essa área se tornou um mercado crescente. Por isso, o advogado especialista em Direito Digital é um profissional bastante valorizado. Neste ramo de atuação, ele será responsável por questões jurídicas relacionadas à internet e à informática. Prepare-se para lidar com relações entre usuários e seus provedores, além de todo tipo de e-commerce e bancos.`,
        },
        {
          titulo: `Direito Comercial - `,
          texto: `É a área do Direito relacionada aos aspectos jurídicos do comércio. Ou seja: o profissional vai defender os interesses de empresários e seus negócios.`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Direito:`,
      subtexto: `O perfil do profissional do Direito, ao contrário do que muitos pensam, não é introvertido ou solitário, características como boa desenvoltura ao falar e escrever, ter raciocínio rápido, memória boa e ser bem sociável e flexível, se tornaram fundamentais para as novas demandas da sociedade. Além disso, o curso de Direito exige muita leitura e dedicação, então, ser organizado é fundamental.`,
      caracteristica: [
        'História',
        'Filosofia',
        'Trabalho em equipe',
        'Política',
      ],
    },
    4: {
      titulo: 'Medicina',
      avaliacao: 5,
      imagem: 'imgs/medicina.jpg',
      remuneracao: 'R$ 13.769,00',
      empregados: '470 mil',
      textoprincipal: [
        'Um profissional da Medicina trabalha na promoção da saúde, na prevenção e no tratamento dos males diversos que afetam os seres humanos. Ele pode ser um médico generalista, e atuar de muitas formas, cuidando de todos os tipos de pacientes, ou médico especialista, focando em apenas uma área médica. Outro ponto muito interessante do campo da Medicina é a variedade das suas vertentes. Um médico formado pode desempenhar papéis muito diferentes, que vão desde a atuação clínica às funções de pesquisador e professor. É possível trabalhar em ambientes distintos como clínicas, hospitais, escolas, centros de pesquisa, empresas etc.'
      ],
      tituloramificacao: `A área de Medicina abre portas para muitas ramificações inportantes para atualidade como:`,
      ramificacao: [
        {
          titulo: `Cardiologia - `,
          texto: `Uma das áreas da Medicina mais conhecidas, a Cardiologia se dedica ao cuidado de um dos principais órgãos do corpo humano: o coração. A especialidade é bastante procurada e valorizada, uma vez que as doenças cardíacas são muito comuns e, se não forem tratadas adequadamente, podem levar ao óbito do paciente.`,
        },
        {
          titulo: `Cirurgia Plástica - `,
          texto: `A procura por essa especialidade aumenta a cada ano no Brasil, o que faz com que a carreira nessa área da Medicina seja muito promissora. Alguns dos procedimentos mais populares entre os pacientes são o aumento das mamas, a lipoaspiração e a rinoplastia, que é a cirurgia do nariz.`,
        },
        {
          titulo: `Dermatologia - `,
          texto: `Voltada para o diagnóstico e tratamento das doenças de pele, a Dermatologia é uma das áreas da Medicina mais populares. Especialmente em um país como o nosso, onde a exposição prolongada ao sol é algo comum, o dermatologista acaba sendo muito procurado para cuidar de problemas cutâneos.`,
        },
        {
          titulo: `Gestão Hospitalar - `,
          texto: `O profissional da Medicina também pode atuar no processo administrativo de instituições de saúde. É disso que a área de Gestão Hospitalar trata. Essa especialidade cuida da tomada de decisões importantes, que se relacionam com o direcionamento de ações dos diversos setores que compõem uma organização.`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Medicina:`,
      subtexto: `O perfil do profissional de Medicina é empatia, flexibilidade e ética profissional: essas são algumas características do perfil do estudante de Medicina, as quais fazem dos médicos excelentes profissionais em busca do bem-estar coletivo`,
      caracteristica: [
        'Biologia',
        'Química',
        'Trabalho em equipe',
        'Patologia',
        'Imunologia',
      ],
    },
    5: {
      titulo: 'Engenharia da Computação',
      avaliacao: 5,
      imagem: 'imgs/engcomp.jpg',
      remuneracao: 'R$ 6.526,00',
      empregados: '488 mil',
      textoprincipal: [
        'Na área de desenvolvimento de software o engenheiro da computação cria programas de computadores e aplicativos para os mais diversos fins. Outra área em que um engenheiro da computação pode atuar é o campo da automação industrial e robótica. Ele desenvolve robôs e sistemas digitais para fábricas e indústrias.'
      ],
      tituloramificacao: `A área de Engenharia da Computação abre portas para muitas ramificações inportantes para atualidade como:`,
      ramificacao: [
        {
          titulo: `Projeção de equipamentos de informática - `,
          texto: `Nessa área, o engenheiro da computação será responsável por projetar e construir peças de informática que compõem novos computadores, como processadores, periféricos, etc. Com as rápidas transformações tecnológicas, esse é um campo importante para o profissional, já que as peças, ferramentas e equipamentos são constantemente atualizadas. `,
        },
        {
          titulo: `Desenvolvimento de sistemas - `,
          texto: `Outra área de atuação que o engenheiro de computação pode optar por seguir é o desenvolvimento de programas. O profissional terá habilidades para manter sistemas de computação, implementar software para sistemas de comunicação e aplicações de softwares e serviços. Dessa forma, poderá contribuir para o monitoramento e controle de diferentes atividades através de dispositivos e equipamentos apropriados.`,
        },
        {
          titulo: `Redes de Computadores - `,
          texto: `Projeção, implantação, gerenciamento e manutenção de redes de computadores também são atividades que podem ser desenvolvidas pelo engenheiro de computação. As redes de computadores são importantes para a troca de informações e recursos em diferentes máquinas, interligadas entre si por sistema de comunicação. `,
        },
        {
          titulo: `Controle e automação  - `,
          texto: `Área importante para o setor industrial, controle e automação lida com a automatização de tarefas e processos. O engenheiro da computação pode atuar nesse segmento com o desenvolvimento de robôs, aparelhos e sistemas.`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Engenharia da Computação:`,
      subtexto: `Você gosta de tudo o que envolve tecnologia e inovação, como programas, códigos e aplicativos? Então, você provavelmente apresenta o perfil de um engenheiro de computação. Além de que é necessário muita das vezes trabalhar em equipe, e usar bastante matemática.`,
      caracteristica: [
        'Matemática',
        'Computação',
        'Trabalho em equipe',
        'Física',
        'IA',
      ],
    },
    6: {
      titulo: 'Ciências Contábeis',
      avaliacao: 5,
      imagem: 'imgs/contabeis.jpg',
      remuneracao: ' R$ 4.631,00',
      empregados: '875 mil',
      textoprincipal: [
        'O profissional formado em ciências contábeis desenvolve atividades variadas tanto no setor público quanto na esfera privada. É quem administra, acompanha e gere as contas de uma instituição, registrando as despesas, as receitas e os lucros, tendo ainda competência para fazer as declarações de imposto de renda.'
      ],
      tituloramificacao: `A área de Ciências contábeis abre portas para muitas ramificações inportantes para atualidade como:`,
      ramificacao: [
        {
          titulo: `Ciências Contábeis Ambientais - `,
          texto: `A Contabilidade Ambiental é outro ramo de atuação profissional que está em crescimento e representa uma tendência no mercado atual. O seu principal foco é unir o contexto das questões do meio ambiente com os cálculos financeiros de uma empresa para ajudar no processo de tomada de decisão por parte dos gestores.`,
        },
        {
          titulo: `Ciências Contábeis Internacionais - `,
          texto: `A Contabilidade Internacional é uma ramificação que está em contínua expansão, devido ao fato de estarmos em um mercado cada vez mais globalizado, com negociações e transações que atravessam fronteiras em questão de segundos.`,
        },
        {
          titulo: `Ciências Contábeis Bancárias - `,
          texto: `Quando falamos de Contabilidade Bancária, referimo-nos à ciência que analisa os índices financeiros de patrimônio dos bancos e os auxilia a realizar as escolhas certas para investimentos e operações econômicas, além de garantir uma excelente administração do dinheiro destas instituições. `,
        },
        {
          titulo: `Ciências Contábeis Imobiliárias  - `,
          texto: `Com estes e demais indicadores importantes, o contador da área imobiliária auxilia as empresas e pessoas físicas a tomarem decisões mais assertivas em investimentos e aplicações financeiras no setor.`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Ciências Contábeis:`,
      subtexto: `O perfil do profissional de contabilidade precisa ser analítico e com bom raciocínio lógico, afim de entender e mensurar os dados financeiros e patrimoniais da organização, efetuando análises e previsões de mercado. O contador é uma peça fundamental do meio organizacional`,
      caracteristica: [
        'Matemática',
        'Administração',
        'Organização',
        'Economia',
        'Estatatística',
      ],
    },
    7: {
      titulo: 'Engenharia Aeronáutica',
      avaliacao: 5,
      imagem: 'imgs/aeronautica.jpg',
      remuneracao: 'R$ 7.772,56',
      empregados: '430 mil',
      textoprincipal: [
        'A Engenharia Aeronáutica é a área responsável pelo projeto e fabricação de aeronaves. O seu conhecimento é amplo e envolve diferentes campos das Ciências Exatas. O engenheiro aeronáutico pode atuar com diferentes tipos de aeronaves, helicópteros e planadores. Além da elaboração de projetos, o profissional também executa atividades voltadas para a manutenção.'
      ],
      tituloramificacao: `A área de Engenharia Aeronáutica abre portas e o profissional pode atuar em áreas como:`,
      ramificacao: [
        {
          titulo: `Sistemas de controle - `,
          texto: `Esse segmento abrange o projeto, construção, instalação e testes de sensores e instrumentos que farão o controle do veículo.

          São definidas as especificações desses mecanismos que controlam os componentes da aeronave, como o trem de pouso, a alimentação de combustível e a pressurização da cabine.`,
        },
        {
          titulo: `Manutenção  - `,
          texto: `Nessa área, o engenheiro atua na manutenção (preditiva e preventiva) e fiscalização de aeronaves e de seus componentes. São feitos reparos e inspeções periódicas em toda a estrutura e em seus sistemas.`,
        },
        {
          titulo: `Coordenação de tráfego aéreo - `,
          texto: `Fica a cargo do profissional garantir a segurança de um voo. Ele estuda e gerencia o fluxo das aeronaves, a velocidade, rota e altitude, atentando-se para as condições meteorológicas e cartográficas do espaço aéreo. `,
        },
        {
          titulo: `Desenvolvimento de tecnologias  - `,
          texto: `Aqui, o engenheiro aeronáutico é responsável pela criação de novas tecnologias e pelo gerenciamento da utilização das tecnologias disponíveis e viáveis, para melhorar o desempenho de aeronaves.

          Essas são pequenas prévias das atribuições de um engenheiro aeronáutico. Qual delas te chamou mais atenção?`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Engenharia Aeronáutica:`,
      subtexto: `O engenheiro aeronáutico também possui habilidades para projetar, construir e instalar sistemas de aeronaves, como motores, instrumentos de controle, sensores, pressurização, entre outros, ou seja, precisa gostar de contas e matemática, e deve ser paciênte e bom em trabalho em equipe, já que é preciso de uma quantidade consideravel de pessoas para finalizar um projeto.`,
      caracteristica: [
        'Matemática',
        'Meio Ambiênte',
        'Mecânica',
        'Física',
        'Aerodinâmica',
      ],
    },
    8: {
      titulo: 'Engenharia Aeroespacial',
      avaliacao: 5,
      imagem: 'imgs/aeroespacial.jpg',
      remuneracao: ' R$ 6.661,00',
      empregados: '733 mil',
      textoprincipal: [
        'A área de Engenharia Aeroespacial lida, entre outras coisas, com o processo de projetar, criar, construir e fabricar qualquer artefato que voe. Jatos, helicópteros e espaçonaves, por exemplo, fazem parte deste campo, que tem dois principais ramos: Engenharia Aeronáutica e Engenharia Astronáutica.'
      ],
      tituloramificacao: `A área de Engenharia Aeroespacial abre portas para muitas ramificações importantes e o profissinal pode trabalhar em várias áreas, como:`,
      ramificacao: [
        {
          titulo: `Desenvolvedor de tecnologias - `,
          texto: `Nessa área, o profissional vai desenvolver tecnologias inovadoras e sistemas defensivos para serem usados no setor da aviação.`,
        },
        {
          titulo: `Designer Estrutural - `,
          texto: `Atuar no design estrutural de aeronaves, com o controle e navegação ou ainda com a produção dos sistemas de comunicação espaciais.`,
        },
        {
          titulo: `Manutenção - `,
          texto: `Trabalha na manutenção de aviões, em grandes empresas aéreas, e institutos de pesquisa, como o Instituto Nacional de Pesquisas Espaciais (INPE). `,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Engenharia Aeroespacial:`,
      subtexto: `Primeiramente, a pessoa deve ter facilidade e afinidade com as ciências exatas. Porém, apenas isso pode não ser suficiente, pois essa área apresenta uma grande gama de possibilidades de atuação. Por isso, o engenheiro precisa ter familiaridade com outros campos do conhecimento, principalmente se deseja estudar para concursos públicos. Nessa situação, é muito importante conhecer bastante sobre Informática e Língua Portuguesa. Além dessa questão, os engenheiros desse segmento costumam ser detalhistas, organizados e têm facilidade para trabalhar em equipe. `,
      caracteristica: [
        'Matemática',
        'Física',
        'Mecânica',
        'Trabalho em equipe',
        'Computação',
      ],
    },
    9: {
      titulo: 'Design Gráfico',
      avaliacao: 5,
      imagem: 'imgs/design.jpg',
      remuneracao: ' R$ 4.005,00',
      empregados: '890 mil',
      textoprincipal: [
        'O designer está habilitado para desenvolver projetos gráficos de comunicação visual, como panfletos, cartões de visita, elaboração de web sites, pôsteres e logotipos. Os profissionais também podem atuar com criação do design de embalagens e produtos, como vestuário, móveis, calçados, automóveis, etc. '
      ],
      tituloramificacao: `A área de Design Gráfico abre portas para muitas ramificações importantes e o profissinal pode trabalhar em várias áreas, como:`,
      ramificacao: [
        {
          titulo: `Design digital - `,
          texto: `Se o designer gráfico é responsável por toda a comunicação impressa de uma companhia, o digital é focado nos tipos de mídia eletrônica e online, como edição de vídeos e animações, além de desenvolvimento de aplicativos, sites e jogos.`,
        },
        {
          titulo: `Desenho de embalagens e produtos - `,
          texto: `Formatos diferenciados, uma boa composição de cores ou grafismos e layouts criativos fazem, certamente, toda a diferença na hora de destacar um produto em meio a tantos concorrentes, não é mesmo? Daí vem a importância do designer de embalagens e produtos`,
        },
        {
          titulo: `Identidade visual - `,
          texto: `Também conhecida como “branding”, essa área engloba toda a gestão de uma marca, considerando todos os elementos que a representam visualmente, caracterizando a sua assinatura institucional`,
        },
        {
          titulo: `Programação visual - `,
          texto: `O objetivo da programação visual é comunicar visualmente uma determinada mensagem, utilizando um meio gráfico, considerando a percepção do público-alvo e fazendo uso de um conjunto de ferramentas.`,
        },
      ],
      titulo3: `Qual é o perfil do profissional formado em Design Gráfico:`,
      subtexto: `As principais caractérias que o profissional deve ter são: criatividade, facilidade com tecnologias, bom senso estético, trabalho em equipe, vontade de aprender, ter estilo próprio. `,
      caracteristica: [
        'Design',
        'Computadores',
        'Arte',
        'Trabalho em equipe',
        'Criatividade',
      ],
    },
    10: {
      titulo: 'Medicina Veterinária',
      avaliacao: 5,
      imagem: 'imgs/medicina-veterinaria.jpg',
      remuneracao: ' R$ 4.212,00',
      empregados: '890 mil',
      textoprincipal: [
        'O médico veterinário dá assistência clínica e cirúrgica a animais domésticos e silvestres. Ele cuida da saúde, alimentação e reprodução de rebanhos, e inspeciona a produção de alimentos de origem animal. Neste caso, verifica o cumprimento das normas de higiene nas indústrias, a fim de evitar a transmissão de doenças para o ser humano.'
      ],
      tituloramificacao: `A área de Medicina Veterinária abre portas para muitas ramificações importantes e o profissinal pode trabalhar em várias áreas, como:`,
      ramificacao: [
        {
          titulo: `Área de animais de Grande Porte - `,
          texto: `Este profissional geralmente trabalha em campo atendendo os rebanhos bovinos, caprinos e equinos.`,
        },
        {
          titulo: `Área de Animais Silvestres - `,
          texto: `O médico veterinário trabalhará em zoológicos, fazenda de criação de répteis ou avestruz. Ou ainda, instituições privadas ou públicas que precisam de remoção de animais silvestres de áreas de construção de estradas, alagamentos entre outras situações.`,
        },
        {
          titulo: `Área de Animais de Pequeno Porte - `,
          texto: `Esta é a mais popular! A atuação do médico veterinário neste caso se refere ao atendimento clínico de cães e gatos. Além disso, o profissional presta serviços cirúrgicos, vacinação e procedimentos ambulatoriais.`,
        },
      
      ],
      titulo3: `Qual é o perfil do profissional formado em Medicina Veterinária:`,
      subtexto: `Podemos dizer que as principais características incluem amor pelos animais, controle emocional, comunicação empática e capacidade decisória.`,
      caracteristica: [
        'Química',
        'Biologia',
        'Animais',
        'Psicologia',
        'Fisiologia',
      ],
    },
  }
  const urlParams = new URLSearchParams(window.location.search)
  let busca = urlParams.get('id')
  const curso = cursos[busca]
  $(() => {
    if (!cursos[busca]) {
      if (urlParams.get('curso')){
        $('#titulo').text(`Não há nenhum conteudo sobre ${urlParams.get('curso')}`)
      }
      else {
        $('#barraazul').hide();
        
        $('#titulo').text(`Pagina não encontrada`)
      }
    }
    $('#titulo').text(`Curso de ${curso.titulo}`)
    $('#banner').text(`${curso.remuneracao}`)
    document.getElementById('banner').innerHTML = `<img src="${curso.imagem}">`
    $('#remuneracao').text(`${curso.remuneracao}`)
    $('#empregados').text(`${curso.empregados}`)
    $('#titulo2').text(`Como é a carreira em ${curso.titulo}`)
    $('#empregados').text(`${curso.empregados}`)
    $('#titulo-ramificacoes').text(`${curso.tituloramificacao}`)
    $('#titulo-perfil').text(`${curso.titulo3}`)
    $('#texto-perfil').text(`${curso.subtexto}`)
    var li = curso.textoprincipal
    var li2 = curso.ramificacao
    var li3 = curso.caracteristica
    var cursosList = ' '
    for (i = 0; i < Math.trunc(curso.avaliacao) + 1; i++) {
      if (i == Math.trunc(curso.avaliacao)) {
        if (
          curso.avaliacao - Math.trunc(curso.avaliacao) >= 0.3 &&
          curso.avaliacao - Math.trunc(curso.avaliacao) <= 0.7
        ) {
          cursosList += `<span class="fa fa-star-half checked"></span>`
        }
      } else {
        cursosList += `<span class="fa fa-star checked"></span>`
      }
    }
    document.getElementById('estrelas').innerHTML = cursosList
    cursosList = ' '
    if (li.length != null) {
      for (i = 0; i < li.length; i++) {
        //if ((busca.toLowerCase()).match((curso[i].textoprincipal).toLowerCase())) {
        cursosList += `<p>${curso.textoprincipal[i]}</p>`
        //}
      }
      document.getElementById('lista-texto-cursos').innerHTML = cursosList
    }
    cursosList = ' '
    for (i = 0; i < li2.length; i++) {
      cursosList += `<div class="col-12 fundo baixo">
                            <p><b>${curso.ramificacao[i].titulo}</b>${curso.ramificacao[i].texto}</p>
                            <p><p>
                          </div>`
      //cursosList2 +=`<p><b>${curso.ramificacao[i].titulo}</b>${curso.ramificacao[i].texto}</p>`;
    }
    document.getElementById('ramificacoes').innerHTML = cursosList
    cursosList = ' '
    for (i = 0; i < li3.length; i++) {
      cursosList += `<div class="col-12 col-md-3 col-lg-2 col-xl-2 fundop ">
          <p><b>${curso.caracteristica[i]}</b></p>
      </div>`
      //cursosList2 +=`<p><b>${curso.ramificacao[i].titulo}</b>${curso.ramificacao[i].texto}</p>`;
    }
    document.getElementById('categoria').innerHTML = cursosList
  })