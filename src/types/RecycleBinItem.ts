export interface RecycleBinItem {
  id: string;

  entityType:
    | "customer"
    | "purchaseInvoice"
    | "saleInvoice";

  entityId: string;

  entityName: string;

  deletedAt: string;

  scheduledPermanentDeleteAt: string;
}
