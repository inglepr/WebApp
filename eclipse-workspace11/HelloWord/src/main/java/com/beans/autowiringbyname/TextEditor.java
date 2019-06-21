package com.beans.autowiringbyname;

public class TextEditor {
private SpellChecker spellchecker;
private String name;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public void getSpellChecker() {
	 spellchecker.checkSpelling();
}
}
