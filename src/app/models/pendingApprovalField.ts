export interface PendingApprovalField {
  requestId?: number;
  fieldKey?: string;
  fieldLabel?: string;
  pathElement?: string;
  from?: string;
  to?: string;
  requesterId?: number;
  requesterName?: string;
  requesterOwn?: boolean;
  editable?: boolean;
  requestedAt?: Date;
}