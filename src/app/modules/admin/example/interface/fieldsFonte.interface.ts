import { ProprietarioFonteInterface } from "./proprietarioFonte.interface";
import { TipoFonteInterface } from "./tipoFonte.interface";

export interface FieldsFonteInterface {
    proprietario: ProprietarioFonteInterface;
    tipo_fonte: TipoFonteInterface;
    status: string;
}