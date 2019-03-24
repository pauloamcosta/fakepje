var faker = require("faker");

var appRouter = function (app) {



  app.get("/", function (req, res) {
    res.status(200).send([
        {
          "id": 1,
          "titulo": "EXECUÇÃO DE TÍTULO EXTRAJUDICIAL",
          "numero": "0800003-14.2010.4.05.8400",
          "partesRe": [
            {
              "nome": "Joao Paulo Silva"
            }
          ],
          "PartesAutoras": [
            {
              "nome": "João Pedro Costa"
            }
          ]
        },
        {
          "id": 2,
          "titulo": "PROCEDIMENTO COMUM",
          "numero": "0814546-41.2018.4.05.8400",
          "partesRe": [
            {
              "nome": "União Federal"
            }
          ],
          "PartesAutoras": [
            {
              "nome": "Maria do Socorro"
            }
          ]
        },
        {
          "id": 3,
          "titulo": "INQUÉRITO POLICIAL",
          "numero": "0814190-46.2018.4.05.8400",
          "partesRe": [
            {
              "nome": "Pedro José Costa"
            }
          ],
          "PartesAutoras": [
            {
              "nome": "Delepat"
            }
          ]
        },
        {
          "id": 4,
          "titulo": "OUTROS PROCEDIMENTOS DE JURISDIÇÃO VOLUNTÁRIA",
          "numero": "0812749-30.2018.4.05.8400",
          "partesRe": [
            {
              "nome": "Caixa Econômica Federal"
            }
          ],
          "PartesAutoras": [
            {
              "nome": "João Costa Filho"
            }
          ]
        },
        {
          "id": 5,
          "titulo": "EMBARGOS À EXECUÇÃO",
          "numero": "0803711-67.2013.4.05.8400",
          "partesRe": [
            {
              "nome": "Fazenda Nacional"
            }
          ],
          "PartesAutoras": [
            {
              "nome": "João Costa Filho"
            }
          ]
        },
        {
          "id": 6,
          "titulo": "EMBARGOS À EXECUÇÃO",
          "numero": "0803712-67.2013.4.05.8400",
          "partesRe": [
            {
              "nome": "Fazenda Nacional"
            }
          ],
          "PartesAutoras": [
            {
              "nome": "João Costa Filho"
            }
          ]
        }
      ]);
  });

  app.get("/1", function (req, res) {
    res.status(200).send({
        "id": 19,
        "numero": "0800003-14.2010.4.05.8400",
        "dataInicio": "2010-04-17 12:06:44.533",
        "dataDistribuicao": "2010-04-19 11:31:32.14",
        "justicaGratuita": "N",
        "instancia": 0,
        "classeJudicial": "EXECUÇÃO DE TÍTULO EXTRAJUDICIAL",
        "orgaoJulgador": "5ª VARA FEDERAL",
        "assunto": "Contratos Bancários",
        "dataUltimaMovimentacao": "2012-05-29 17:06:14.118",
        "movimentacoes": [
            {
                "id": 206,
                "dataAtualizacao": "2012-05-03 13:43:14.161",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-10-19 18:40:44.706",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-05-09 18:04:43.27",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2010-09-10 17:05:31.04",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2010-12-06 12:09:38.077",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-01-26 17:19:51.348",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-02-28 15:52:42.973",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-05-09 18:04:25.807",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-03-03 15:08:58.454",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-01-26 17:20:00.989",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2010-12-06 12:09:53.553",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2010-09-10 17:05:40.798",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 212,
                "dataAtualizacao": "2010-08-03 18:13:44.244",
                "descricao": "Expedição de documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 1,
                "dataAtualizacao": "2010-10-04 17:37:37.383",
                "descricao": "Magistrado",
                "visibilidadeExterna": "S"
            },
            {
                "id": 112,
                "dataAtualizacao": "2010-10-25 18:21:22.092",
                "descricao": "Proferido despacho de mero expediente",
                "visibilidadeExterna": "S"
            },
            {
                "id": 192,
                "dataAtualizacao": "2010-04-19 11:31:31.406",
                "descricao": "Recebido pelo Distribuidor",
                "visibilidadeExterna": "S"
            },
            {
                "id": 1,
                "dataAtualizacao": "2010-12-06 12:11:26.946",
                "descricao": "Magistrado",
                "visibilidadeExterna": "S"
            },
            {
                "id": 1,
                "dataAtualizacao": "2011-01-26 17:20:52.718",
                "descricao": "Magistrado",
                "visibilidadeExterna": "S"
            },
            {
                "id": 1,
                "dataAtualizacao": "2011-03-03 15:09:09.069",
                "descricao": "Magistrado",
                "visibilidadeExterna": "S"
            },
            {
                "id": 191,
                "dataAtualizacao": "2010-04-19 11:31:30.406",
                "descricao": "Distribuído",
                "visibilidadeExterna": "S"
            },
            {
                "id": 1,
                "dataAtualizacao": "2011-05-09 18:06:40.251",
                "descricao": "Magistrado",
                "visibilidadeExterna": "S"
            },
            {
                "id": 112,
                "dataAtualizacao": "2011-05-18 15:09:39.499",
                "descricao": "Proferido despacho de mero expediente",
                "visibilidadeExterna": "S"
            },
            {
                "id": 214,
                "dataAtualizacao": "2011-08-09 17:02:15.267",
                "descricao": "Documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 214,
                "dataAtualizacao": "2011-08-09 17:03:44.974",
                "descricao": "Documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 214,
                "dataAtualizacao": "2011-08-29 17:20:49.373",
                "descricao": "Documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 112,
                "dataAtualizacao": "2011-10-19 18:47:37.619",
                "descricao": "Proferido despacho de mero expediente",
                "visibilidadeExterna": "S"
            },
            {
                "id": 212,
                "dataAtualizacao": "2011-11-28 17:50:07.963",
                "descricao": "Expedição de documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 214,
                "dataAtualizacao": "2012-01-18 17:37:55.98",
                "descricao": "Documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 214,
                "dataAtualizacao": "2012-01-18 17:46:06.347",
                "descricao": "Documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 212,
                "dataAtualizacao": "2012-01-18 17:50:03.322",
                "descricao": "Expedição de documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 214,
                "dataAtualizacao": "2012-02-16 17:21:01.766",
                "descricao": "Documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 112,
                "dataAtualizacao": "2012-05-03 14:17:32.87",
                "descricao": "Proferido despacho de mero expediente",
                "visibilidadeExterna": "S"
            },
            {
                "id": 212,
                "dataAtualizacao": "2012-05-04 16:07:11.839",
                "descricao": "Expedição de documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 214,
                "dataAtualizacao": "2012-05-29 17:06:08.189",
                "descricao": "Documento",
                "visibilidadeExterna": "S"
            },
            {
                "id": 189,
                "dataAtualizacao": "2012-05-29 17:06:14.086",
                "descricao": "Baixa Definitiva",
                "visibilidadeExterna": "S"
            }
        ],
        "documentos": [
            {
                "id": 6288,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 17:02:49.318",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 6287,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 17:01:46.526",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 6286,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 16:58:44.425",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 6285,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 16:55:11.614",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 6284,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 16:45:41.31",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 186,
                "descricao": "Manifestação sobre certidões do oficial de justiça",
                "dataInclusao": "2010-08-30 17:47:05.305",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 187,
                "descricao": "MANIFESTAÇÃO",
                "dataInclusao": "2010-08-30 18:30:54.563",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 16,
                "descricao": "Execução de título extrajudicial",
                "dataInclusao": "2010-04-17 12:11:17.288",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 17,
                "descricao": "Contrato, Demonstrativo de cálculo",
                "dataInclusao": "2010-04-17 12:14:19.093",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "petição CEF x Fortunato e Fonseca Ltda. ME.pdf",
                "tamanhoArquivo": 21055157,
                "sigiloso": "N"
            },
            {
                "id": 3725,
                "descricao": "Certidão",
                "dataInclusao": "2012-05-29 17:06:08.132",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 3632,
                "descricao": "Despacho",
                "dataInclusao": "2012-05-03 13:54:12.405",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 3265,
                "descricao": "Certidão-decurso de prazo",
                "dataInclusao": "2012-02-16 17:20:27.043",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 3174,
                "descricao": "Intimação",
                "dataInclusao": "2012-01-18 17:50:03.16",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 3173,
                "descricao": "Informação de Secretaria",
                "dataInclusao": "2012-01-18 17:45:31.273",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 3172,
                "descricao": "Certidão-decurso de prazo",
                "dataInclusao": "2012-01-18 17:37:55.86",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 2902,
                "descricao": "Intimação",
                "dataInclusao": "2011-11-28 17:50:07.722",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 2803,
                "descricao": "Mandado de Citação-José Maria da Fonseca-novo endereço",
                "dataInclusao": "2011-11-11 17:14:37.334",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "Mandado de Citação-Jose Maria da Fonseca.pdf",
                "tamanhoArquivo": 219924,
                "sigiloso": "N"
            },
            {
                "id": 2802,
                "descricao": "Certidão de citação",
                "dataInclusao": "2011-11-11 17:13:03.254",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 2431,
                "descricao": "MANDADO DE CITAÇÃO",
                "dataInclusao": "2011-08-29 17:22:58.831",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "mandado citação Exec. Título Extra PJE.pdf",
                "tamanhoArquivo": 19800,
                "sigiloso": "N"
            },
            {
                "id": 2430,
                "descricao": "MANDADO DE CITAÇÃO JOSÉ MARIA DA FONSECA",
                "dataInclusao": "2011-08-29 17:20:49.248",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 2339,
                "descricao": "Mandado de Citação - Mário Márcio Fortunato da Silva",
                "dataInclusao": "2011-08-09 17:04:57.13",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "Mandado de Citação - Mário Márcio Fortunato da Silva.pdf",
                "tamanhoArquivo": 222241,
                "sigiloso": "N"
            },
            {
                "id": 2338,
                "descricao": "Mandado de Citação - Mário Márcio Fortunato da Silva",
                "dataInclusao": "2011-08-09 17:03:44.904",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 2337,
                "descricao": "Certidão",
                "dataInclusao": "2011-08-09 17:02:15.192",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1827,
                "descricao": "informações do INFOSEG",
                "dataInclusao": "2011-06-16 13:44:58.576",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "Infoseg.pdf",
                "tamanhoArquivo": 289849,
                "sigiloso": "N"
            },
            {
                "id": 1826,
                "descricao": "Certidão - informação INFOSEG",
                "dataInclusao": "2011-06-16 13:43:52.577",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1714,
                "descricao": "Inspeção",
                "dataInclusao": "2011-06-09 10:52:14.338",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1710,
                "descricao": "Certidão - informação INFOSEG",
                "dataInclusao": "2011-06-08 18:02:45.348",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1708,
                "descricao": "Certidão - informação INFOSEG",
                "dataInclusao": "2011-06-08 17:31:47.672",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1687,
                "descricao": "Certidão - Informação do INFOSEG",
                "dataInclusao": "2011-05-27 18:05:50.12",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1686,
                "descricao": "certidão",
                "dataInclusao": "2011-05-27 17:54:53.854",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1688,
                "descricao": "Certidão - Informação do INFOSEG",
                "dataInclusao": "2011-05-30 18:06:39.941",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1486,
                "descricao": "Citação",
                "dataInclusao": "2011-05-19 17:34:30.405",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1483,
                "descricao": "certidão",
                "dataInclusao": "2011-05-18 17:38:40.024",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1473,
                "descricao": "Minuta",
                "dataInclusao": "2011-05-09 18:06:25.032",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1472,
                "descricao": "CERTIDÃO",
                "dataInclusao": "2011-05-09 17:25:20.055",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 1038,
                "descricao": "Intimação",
                "dataInclusao": "2011-03-14 17:39:35.151",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 857,
                "descricao": "Minuta",
                "dataInclusao": "2011-01-26 17:20:39.601",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 700,
                "descricao": "Minuta",
                "dataInclusao": "2010-12-06 12:11:09.449",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 528,
                "descricao": "Minuta",
                "dataInclusao": "2010-04-23 13:04:43.296",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 21,
                "descricao": "Minuta",
                "dataInclusao": "2010-04-23 13:05:43.296",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 306,
                "descricao": "Juntada de documentos",
                "dataInclusao": "2010-09-06 09:07:42.155",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 202,
                "descricao": "Anexos a petição",
                "dataInclusao": "2010-09-02 10:42:54.682",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 201,
                "descricao": "Juntada de documentos",
                "dataInclusao": "2010-09-02 10:17:53.501",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 307,
                "descricao": "Extratos de consulta_endereço",
                "dataInclusao": "2010-09-06 09:14:43.331",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "extratos de consulta.pdf",
                "tamanhoArquivo": 148657,
                "sigiloso": "N"
            },
            {
                "id": 71,
                "descricao": "Intimação",
                "dataInclusao": "2010-08-03 12:30:54.126",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 67,
                "descricao": "Mandado de citação, penhora e avaliação - Mário Márcio Fortunato da Silva",
                "dataInclusao": "2010-07-23 18:06:18.733",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "mandado-Mario Marcio Fortunato da Silva.pdf",
                "tamanhoArquivo": 517997,
                "sigiloso": "N"
            },
            {
                "id": 66,
                "descricao": "Mandado de citação, penhora e avaliação - José Maria Fonseca",
                "dataInclusao": "2010-07-23 18:01:56.021",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "mandado-José Maria Fonseca.pdf",
                "tamanhoArquivo": 399659,
                "sigiloso": "N"
            },
            {
                "id": 65,
                "descricao": "Mandado de citação, penhora e avaliação - Fortunato e Fonseca Ltda - ME",
                "dataInclusao": "2010-07-23 17:51:39.494",
                "extensaoArquivo": ".pdf",
                "nomeArquivo": "mandado-Fortunato e Fonseca LTDA ME.pdf",
                "tamanhoArquivo": 393238,
                "sigiloso": "N"
            },
            {
                "id": 45,
                "descricao": "Citação",
                "dataInclusao": "2010-07-05 12:58:40.109",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 44,
                "descricao": "Citação",
                "dataInclusao": "2010-07-05 12:52:56.997",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 43,
                "descricao": "Citação",
                "dataInclusao": "2010-07-05 11:28:52.047",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 20,
                "descricao": "Certidao",
                "dataInclusao": "2010-04-22 18:11:51.863",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 2678,
                "descricao": "Despacho",
                "dataInclusao": "2011-10-19 18:47:37.452",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 68,
                "descricao": "ato",
                "dataInclusao": "2010-07-28 18:03:02.349",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            },
            {
                "id": 3637,
                "descricao": "Intimação",
                "dataInclusao": "2012-05-04 16:07:11.722",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            }
        ]
    });
  });

  app.get("/2", function (req, res) {
    res.status(200).send({
        "id": 2,
        "numero": "0814546-41.2018.4.05.8400",
        "dataInicio": "2010-04-17 12:06:44.533",
        "dataDistribuicao": "2010-04-19 11:31:32.14",
        "justicaGratuita": "N",
        "instancia": 0,
        "classeJudicial": "PROCEDIMENTO COMUM",
        "orgaoJulgador": "5ª VARA FEDERAL",
        "assunto": "Contratos Bancários",
        "dataUltimaMovimentacao": "2012-05-29 17:06:14.118",
        "movimentacoes": [
            {
                "id": 206,
                "dataAtualizacao": "2012-05-03 13:43:14.161",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-10-19 18:40:44.706",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-05-09 18:04:43.27",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            }
        ],
        "documentos": [
            {
                "id": 6288,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 17:02:49.318",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            }
        ]
    });
  });
  app.get("/3", function (req, res) {
    res.status(200).send({
        "id": 3,
        "numero": "0814190-46.2018.4.05.8400",
        "dataInicio": "2010-04-17 12:06:44.533",
        "dataDistribuicao": "2010-04-19 11:31:32.14",
        "justicaGratuita": "N",
        "instancia": 0,
        "classeJudicial": "INQUÉRITO POLICIAL",
        "orgaoJulgador": "5ª VARA FEDERAL",
        "assunto": "Contratos Bancários",
        "dataUltimaMovimentacao": "2012-05-29 17:06:14.118",
        "movimentacoes": [
            {
                "id": 206,
                "dataAtualizacao": "2012-05-03 13:43:14.161",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-10-19 18:40:44.706",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-05-09 18:04:43.27",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            }
        ],
        "documentos": [
            {
                "id": 6288,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 17:02:49.318",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            }
        ]
    });
  });
  app.get("/4", function (req, res) {
    res.status(200).send({
        "id": 4,
        "numero": "0812749-30.2018.4.05.8400",
        "dataInicio": "2010-04-17 12:06:44.533",
        "dataDistribuicao": "2010-04-19 11:31:32.14",
        "justicaGratuita": "N",
        "instancia": 0,
        "classeJudicial": "OUTROS PROCEDIMENTOS DE JURISDIÇÃO VOLUNTÁRIA",
        "orgaoJulgador": "5ª VARA FEDERAL",
        "assunto": "Contratos Bancários",
        "dataUltimaMovimentacao": "2012-05-29 17:06:14.118",
        "movimentacoes": [
            {
                "id": 206,
                "dataAtualizacao": "2012-05-03 13:43:14.161",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-10-19 18:40:44.706",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-05-09 18:04:43.27",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            }
        ],
        "documentos": [
            {
                "id": 6288,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 17:02:49.318",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            }
        ]
    });
  });
  app.get("/5", function (req, res) {
    res.status(200).send({
        "id": 5,
        "numero": "0803711-67.2013.4.05.8400",
        "dataInicio": "2010-04-17 12:06:44.533",
        "dataDistribuicao": "2010-04-19 11:31:32.14",
        "justicaGratuita": "N",
        "instancia": 0,
        "classeJudicial": "EMBARGOS À EXECUÇÃO",
        "orgaoJulgador": "5ª VARA FEDERAL",
        "assunto": "Contratos Bancários",
        "dataUltimaMovimentacao": "2012-05-29 17:06:14.118",
        "movimentacoes": [
            {
                "id": 206,
                "dataAtualizacao": "2012-05-03 13:43:14.161",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-10-19 18:40:44.706",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-05-09 18:04:43.27",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            }
        ],
        "documentos": [
            {
                "id": 6288,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 17:02:49.318",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            }
        ]
    });
  });

  app.get("/6", function (req, res) {
    res.status(200).send({
        "id": 6,
        "numero": "0803712-67.2013.4.05.8400",
        "dataInicio": "2010-04-17 12:06:44.533",
        "dataDistribuicao": "2010-04-19 11:31:32.14",
        "justicaGratuita": "N",
        "instancia": 0,
        "classeJudicial": "EMBARGOS À EXECUÇÃO",
        "orgaoJulgador": "5ª VARA FEDERAL",
        "assunto": "Contratos Bancários",
        "dataUltimaMovimentacao": "2012-05-29 17:06:14.118",
        "movimentacoes": [
            {
                "id": 206,
                "dataAtualizacao": "2012-05-03 13:43:14.161",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-10-19 18:40:44.706",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            },
            {
                "id": 206,
                "dataAtualizacao": "2011-05-09 18:04:43.27",
                "descricao": "Conclusão",
                "visibilidadeExterna": "S"
            }
        ],
        "documentos": [
            {
                "id": 6288,
                "descricao": "Certidão",
                "dataInclusao": "2012-11-16 17:02:49.318",
                "extensaoArquivo": null,
                "nomeArquivo": null,
                "tamanhoArquivo": 0,
                "sigiloso": "N"
            }
        ]
    });
  });

}

module.exports = appRouter;