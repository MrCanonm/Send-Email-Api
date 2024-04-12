import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
import { NotFoundException } from '@nestjs/common';
import {
  Events,
  JobNotification,
  PasswordReset,
} from './dto/email.template.dto';

const handlebarsInstance = Handlebars.create();

// Se creo un objetos para agregar las plantillas
const templates = {
  JobNotification: (bodyProperty: JobNotification) => {
    const source = fs.readFileSync(
      path.join(__dirname, '..', '..', 'templates', 'JobNotification.hbs'),
      'utf-8',
    );
    const template = handlebarsInstance.compile(source);
    return template(bodyProperty);
  },

  PasswordReset: (bodyProperty: PasswordReset) => {
    const source = fs.readFileSync(
      path.join(__dirname, '..', '..', 'templates', 'PasswordReset.hbs'),
      'utf-8',
    );
    const hash = `${bodyProperty.pageRecoveryLink}${bodyProperty.passwordHash}`;
    const template = handlebarsInstance.compile(source);
    return template({ ...bodyProperty, url: hash });
  },

  Events: (bodyProperty: Events) => {
    const source = fs.readFileSync(
      path.join(__dirname, '..', '..', 'templates', 'Events.hbs'),
      'utf-8',
    );
    const template = handlebarsInstance.compile(source);
    return template(bodyProperty);
  },
  // Agrega mas plantillas aquí
};

// Se exporta el objeto ya renderizado con las informaciones del html
export const renderTemplate = (templateName: string, bodyProperty: any) => {
  const templateFunction = templates[templateName];
  if (templateFunction) {
    return templateFunction(bodyProperty);
  } else {
    throw new NotFoundException(
      `No se encontro la plantilla "${templateName}"`,
    );
  }
};
