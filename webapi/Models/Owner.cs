﻿using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Owner
{
    public int IdOwner { get; set; }

    public string Name { get; set; } = null!;

    public string Addres { get; set; } = null!;

    public byte[] Photo { get; set; } = null!;

    public DateTime Birthday { get; set; }

    public virtual ICollection<Property> Properties { get; } = new List<Property>();
}
