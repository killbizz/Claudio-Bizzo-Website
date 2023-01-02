import { Event } from "../types/Event";
import { getFileList } from "../lib/cloudinary/utils";

export const getEvents = async (folder: string): Promise<Event[]> => {
  const fileList = await getFileList(folder);

  // console.log(fileList);

  return parseFileList(fileList);
};

const parseFileList = async (fileList: any): Promise<Event[]> => {
  let events: Event[] = [];

  for (const element of fileList.resources) {
    // metadata file
    if (element.format === "txt") {
      // retrieving info from txt file
      let dataString = await fetch(element.secure_url)
        .then((response) => response.text())
        .catch((reason) => {
          console.error(reason);
          throw Error(reason);
        });

      let dataJSON: any;

      try {
        dataJSON = JSON.parse(dataString);
      } catch (error) {
        console.error(dataString);
        console.error(error);
        throw error;
      }

      let dataInizio: Date;
      let dataFine: Date;
      // parsing dates from dd/mm/yyyy to yyyy/mm/dd
      try {
        dataInizio = new Date(dataJSON.data_inizio.split("/").reverse().join("/"));
        dataFine = new Date(dataJSON.data_fine.split("/").reverse().join("/"));
      } catch (error) {
        console.log(
          "Error parsing the dates of the event " + dataJSON.nome_evento
        );
        console.error(error);
        throw error;
      }

      if (dataInizio > dataFine) {
        throw Error(
          "The event " + dataJSON.nome_evento + " contains two wrong dates"
        );
      }

      events.push({
        nome_evento:
          dataJSON.nome_evento !== undefined
            ? dataJSON.nome_evento
            : "informazioni non disponibili",
        data_inizio:
          dataJSON.data_inizio !== undefined
            ? dataJSON.data_inizio.split("/").reverse().join("/")
            : "informazioni non disponibili",
        data_fine:
          dataJSON.data_fine !== undefined
            ? dataJSON.data_fine.split("/").reverse().join("/")
            : "informazioni non disponibili",
        luogo:
          dataJSON.luogo !== undefined
            ? dataJSON.luogo
            : "informazioni non disponibili",
        descrizione:
          dataJSON.descrizione !== undefined
            ? dataJSON.descrizione
            : "",
      });
    }
  }

  return events.sort((a: Event, b: Event) => {
    if(new Date(a.data_inizio) > new Date(b.data_inizio)){
      return -1;
    } else if(new Date(a.data_inizio) < new Date(b.data_inizio)) {
      return 1;
    } else {
      return 0;
    }
  });
};
