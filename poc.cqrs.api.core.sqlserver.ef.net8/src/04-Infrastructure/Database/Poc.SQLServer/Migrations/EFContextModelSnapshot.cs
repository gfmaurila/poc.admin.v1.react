﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Poc.SQLServer.Context;

#nullable disable

namespace Poc.SQLServer.Migrations
{
    [DbContext(typeof(EFSqlServerContext))]
    partial class EFContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Poc.Domain.Entities.User.UserEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("DATE");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasMaxLength(6)
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Notification")
                        .IsRequired()
                        .HasMaxLength(10)
                        .IsUnicode(false)
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)");

                    b.Property<string>("RoleUserAuth")
                        .IsRequired()
                        .HasMaxLength(2048)
                        .IsUnicode(false)
                        .HasColumnType("varchar(2048)");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Poc.Domain.Entities.User.UserEntity", b =>
                {
                    b.OwnsOne("Poc.Core.ValueObjects.Email", "Email", b1 =>
                        {
                            b1.Property<Guid>("UserEntityId")
                                .HasColumnType("uniqueidentifier");

                            b1.Property<string>("Address")
                                .IsRequired()
                                .HasMaxLength(254)
                                .IsUnicode(false)
                                .HasColumnType("varchar(254)")
                                .HasColumnName("Email");

                            b1.HasKey("UserEntityId");

                            b1.ToTable("User");

                            b1.WithOwner()
                                .HasForeignKey("UserEntityId");
                        });

                    b.OwnsOne("Poc.Core.ValueObjects.PhoneNumber", "Phone", b1 =>
                        {
                            b1.Property<Guid>("UserEntityId")
                                .HasColumnType("uniqueidentifier");

                            b1.Property<string>("Phone")
                                .IsRequired()
                                .HasMaxLength(20)
                                .IsUnicode(false)
                                .HasColumnType("varchar(20)")
                                .HasColumnName("Phone");

                            b1.HasKey("UserEntityId");

                            b1.ToTable("User");

                            b1.WithOwner()
                                .HasForeignKey("UserEntityId");
                        });

                    b.Navigation("Email")
                        .IsRequired();

                    b.Navigation("Phone")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}