frappe.ui.form.on("Freight Forwarding Shipment", {
	refresh(frm) {
		if (!frm.is_new()) {
			frm.add_custom_button(__("Shipment Modes"), () => {
				frappe.call({
					method: "erpnext.freight_forwarding.doctype.freight_forwarding_shipment.freight_forwarding_shipment.get_shipment_modes",
					callback: (response) => {
						if (!response.message) {
							return;
						}
						frappe.msgprint({
							title: __("Available Modes"),
							message: response.message.join(", "),
							indicator: "blue",
						});
					},
				});
			});
		}
	},
});
