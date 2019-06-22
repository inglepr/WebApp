package com.annotationbyatowire;

import org.springframework.beans.factory.annotation.Autowired;

import com.atowiringbyname.SpellChecker;

public class TextEditor {
	private SpellChecker spellchecker;
	private String name;
	@Autowired
	public SpellChecker getSpellchecker() {
		return spellchecker;
	}

	public void setSpellchecker(SpellChecker spellchecker) {
		this.spellchecker = spellchecker;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public void CheckSpell() {
		spellchecker.CheckSpelling();
	}

	
}
