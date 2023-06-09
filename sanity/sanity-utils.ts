import { createClient, groq } from "next-sanity";
/* import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page"; */

export async function getTarjeta() {
  const client = createClient({
    projectId: "c5ofbjqo",
    dataset: "production",
    apiVersion: "2023-06-06",
  });

  return client.fetch(
    groq`*[_type == "tarjeta"]{
      _id,
      _createdAt,
      email,
      phone,
      terms,
    }
    `
  );
}

export async function getFirstForm() {
  const client = createClient({
    projectId: "c5ofbjqo",
    dataset: "production",
    apiVersion: "2023-06-06",
  });

  return client.fetch(
    groq`*[_type == "firstForm"]{
      _id,
      _createdAt,
      fieldName,
      fieldType,
      regex,
    }
    `
  );
}

export async function getSecondForm() {
  const client = createClient({
    projectId: "c5ofbjqo",
    dataset: "production",
    apiVersion: "2023-06-06",
  });

  return client.fetch(
    groq`*[_type == "secondForm"]{
      _id,
      _createdAt,
      nombre,
    }
    `
  )
}

