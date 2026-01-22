from __future__ import annotations

import frappe
from frappe.model.document import Document


class FreightForwardingShipment(Document):
	pass


@frappe.whitelist()
def get_shipment_modes() -> list[str]:
	return ["Air", "Sea", "Land", "Courier"]
