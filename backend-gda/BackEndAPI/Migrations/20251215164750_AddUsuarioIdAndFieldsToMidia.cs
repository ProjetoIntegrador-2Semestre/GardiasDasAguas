using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddUsuarioIdAndFieldsToMidia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DataCriacao",
                table: "Midias",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Titulo",
                table: "Midias",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UsuarioId",
                table: "Midias",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Midias_UsuarioId",
                table: "Midias",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Midias_Usuarios_UsuarioId",
                table: "Midias",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Midias_Usuarios_UsuarioId",
                table: "Midias");

            migrationBuilder.DropIndex(
                name: "IX_Midias_UsuarioId",
                table: "Midias");

            migrationBuilder.DropColumn(
                name: "DataCriacao",
                table: "Midias");

            migrationBuilder.DropColumn(
                name: "Titulo",
                table: "Midias");

            migrationBuilder.DropColumn(
                name: "UsuarioId",
                table: "Midias");
        }
    }
}
