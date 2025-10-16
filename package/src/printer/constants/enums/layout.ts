import { EscPosPrinter } from '../../../specs';

const EscPosPrinterConstants = EscPosPrinter.getConstants();

export enum LayoutType {
  LAYOUT_RECEIPT = EscPosPrinterConstants.LAYOUT_RECEIPT,
  LAYOUT_RECEIPT_BM = EscPosPrinterConstants.LAYOUT_RECEIPT_BM,
  LAYOUT_LABEL = EscPosPrinterConstants.LAYOUT_LABEL,
  LAYOUT_LABEL_BM = EscPosPrinterConstants.LAYOUT_LABEL_BM,
}
