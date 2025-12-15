using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTipoUsuarioToThreeTypes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Convert all existing "Admin" users to "Escritor"
            migrationBuilder.Sql(
                "UPDATE \"Usuarios\" SET \"TipoUsuario\" = 'Escritor' WHERE \"TipoUsuario\" = 'Admin'"
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Revert "Escritor" users back to "Admin" (best effort rollback)
            migrationBuilder.Sql(
                "UPDATE Usuarios SET TipoUsuario = 'Admin' WHERE TipoUsuario = 'Escritor'"
            );
        }
    }
}
