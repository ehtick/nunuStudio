"use strict";

function JSHintSettingsTab(parent, closeable, container, index)
{
	TabElement.call(this, parent, closeable, container, index, "JSHint", Editor.filePath + "icons/misc/js.png");

	this.element.style.overflow = "auto";

	//Self pointer
	var self = this;

	//Form
	this.form = new Form(this.element);
	this.form.defaultTextWidth = 125;
	this.form.position.set(5, 5);
	this.form.spacing.set(5, 5);
	
	//Renderer settings
	this.form.addText("JSHint");
	this.form.nextRow();

	//Bitwise
	this.form.addText("Warn Bitwise");
	this.bitwise = new CheckBox(this.form.element);
	this.bitwise.size.set(15, 15);
	this.bitwise.setOnChange(function()
	{
		Settings.jslint.bitwise = self.bitwise.getValue();
	});
	this.form.add(this.bitwise);
	this.form.nextRow();

	//Curly
	this.form.addText("Require curly");
	this.curly = new CheckBox(this.form.element);
	this.curly.size.set(15, 15);
	this.curly.setOnChange(function()
	{
		Settings.jslint.curly = self.curly.getValue();
	});
	this.form.add(this.curly);
	this.form.nextRow();

	//Eqeqeq
	this.form.addText("Require ===");
	this.eqeqeq = new CheckBox(this.form.element);
	this.eqeqeq.size.set(15, 15);
	this.eqeqeq.setOnChange(function()
	{
		Settings.jslint.eqeqeq = self.eqeqeq.getValue();
	});
	this.form.add(this.eqeqeq);
	this.form.nextRow();

	//For...in
	this.form.addText("for...in");
	this.forin = new CheckBox(this.form.element);
	this.forin.size.set(15, 15);
	this.forin.setOnChange(function()
	{
		Settings.jslint.forin = self.forin.getValue();
	});
	this.form.add(this.forin);
	this.form.nextRow();

	//Freeze
	this.form.addText("Freeze");
	this.freeze = new CheckBox(this.form.element);
	this.freeze.size.set(15, 15);
	this.freeze.setOnChange(function()
	{
		Settings.jslint.freeze = self.freeze.getValue();
	});
	this.form.add(this.freeze);
	this.form.nextRow();

	//Latedef
	this.form.addText("Latedef");
	this.latedef = new CheckBox(this.form.element);
	this.latedef.size.set(15, 15);
	this.latedef.setOnChange(function()
	{
		Settings.jslint.latedef = self.latedef.getValue();
	});
	this.form.add(this.latedef);
	this.form.nextRow();

	//Noarg
	this.form.addText("No arguments");
	this.noarg = new CheckBox(this.form.element);
	this.noarg.size.set(15, 15);
	this.noarg.setOnChange(function()
	{
		Settings.jslint.noarg = self.noarg.getValue();
	});
	this.form.add(this.noarg);
	this.form.nextRow();

	//Nonbsp
	this.form.addText("Non bsp");
	this.nonbsp = new CheckBox(this.form.element);
	this.nonbsp.size.set(15, 15);
	this.nonbsp.setOnChange(function()
	{
		Settings.jslint.nonbsp = self.nonbsp.getValue();
	});
	this.form.add(this.nonbsp);
	this.form.nextRow();

	//NoNew
	this.form.addText("No New");
	this.nonew = new CheckBox(this.form.element);
	this.nonew.size.set(15, 15);
	this.nonew.setOnChange(function()
	{
		Settings.jslint.nonew = self.nonew.getValue();
	});
	this.form.add(this.nonew);
	this.form.nextRow();

	//Pluplus
	this.form.addText("Warn ++");
	this.plusplus = new CheckBox(this.form.element);
	this.plusplus.size.set(15, 15);
	this.plusplus.setOnChange(function()
	{
		Settings.jslint.plusplus = self.plusplus.getValue();
	});
	this.form.add(this.plusplus);
	this.form.nextRow();

	//Pluplus
	this.form.addText("Warn Undefined");
	this.undef = new CheckBox(this.form.element);
	this.undef.size.set(15, 15);
	this.undef.setOnChange(function()
	{
		Settings.jslint.undef = self.undef.getValue();
	});
	this.form.add(this.undef);
	this.form.nextRow();

	//Update form
	this.form.updateInterface();
}

JSHintSettingsTab.prototype = Object.create(TabElement.prototype);

//Activate
JSHintSettingsTab.prototype.activate = function()
{
	this.bitwise.setValue(Settings.jslint.bitwise);
	this.curly.setValue(Settings.jslint.curly);
	this.eqeqeq.setValue(Settings.jslint.eqeqeq);
	this.forin.setValue(Settings.jslint.forin);
	this.freeze.setValue(Settings.jslint.freeze);
	this.latedef.setValue(Settings.jslint.latedef);
	this.noarg.setValue(Settings.jslint.noarg);
	this.nonbsp.setValue(Settings.jslint.nonbsp);
	this.nonew.setValue(Settings.jslint.nonew);
	this.plusplus.setValue(Settings.jslint.plusplus);
	this.undef.setValue(Settings.jslint.undef);
};

//Update division Size
JSHintSettingsTab.prototype.updateInterface = function()
{
	//Visibility
	if(this.visible)
	{
		this.element.style.display = "block";

		//Element
		this.element.style.top = this.position.y + "px";
		this.element.style.left = this.position.x + "px";
		this.element.style.width = this.size.x + "px";
		this.element.style.height = this.size.y + "px";
	}
	else
	{
		this.element.style.display = "none";
	}
};
