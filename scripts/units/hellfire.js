const hellfire = extendContent(UnitType, "exotic-mod-hellfire", {});
hellfire.constructor = () => extend(UnitEntity, {});
hellfire.abilities.add(new ForceFieldAbility(300, 0.5, 25463300, 360));
