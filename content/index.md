---
path: '/content'
title: 'ABC Style Structure'
---

> This architecture is heavily influenced by the [SMACSS Framework](https://smacss.com) and its [CSS Rules Categorization](https://smacss.com/book/categorizing).

## 1. Ambience

Contains definitions of project basic characteristics, such as fonts, font sizes, color palette and other variables

**Basic files:**
- **_colors.sass**: contains the project color palette as variables, to be used throughout the code.
- **_fonts.sass**: imports the project font families.
- **_typography.sass**: contains variables related to typography, such as font sizes for the headings and line height.

## 2. Base

Contains another set of basic structures, such as: normalizes or mixins.

**Basic files:**
- **_normalize.sass**: stylesheet used to reset native browser properties.
- **_reusables.sass**: contains structures that repeats throughout the project classes.
- **_typography.sass**: set style for typography, such as headings and body font size, line height and font family using variables on ambience/typography.
- **_unclassed.sass**: set styles for basic html tags, those who don't usually have a class.

## 3. Components

This is where you'll find most of the Sass files. Contains one Sass file for each individual component on the project.

> The components philosophy used here is from [RSCSS](https://rscss.io).

**Example files:**
- **_table-article.sass**: style the component `table-article`.
- **_form-foreign.sass**: style the component `form-contact`.
- **_list-download.sass**: style the component `list-download`.

Components should always have the same name of the component's class they refer to. For example: the file for the component with the class `.table-article` should be `_table-article.scss`.
